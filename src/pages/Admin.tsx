import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Clock, User, Reply, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
  created_at: string;
  replied_at?: string;
  reply_message?: string;
}

const Admin = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [replyMessage, setReplyMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: "Error",
        description: "Failed to load messages",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (messageId: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status: 'read' })
        .eq('id', messageId);

      if (error) throw error;
      
      setMessages(prev => 
        prev.map(msg => 
          msg.id === messageId ? { ...msg, status: 'read' } : msg
        )
      );
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const sendReply = async () => {
    if (!selectedMessage || !replyMessage.trim()) return;

    setIsSending(true);
    try {
      // Update the message status and reply in database
      const { error } = await supabase
        .from('contact_messages')
        .update({ 
          status: 'replied',
          reply_message: replyMessage,
          replied_at: new Date().toISOString()
        })
        .eq('id', selectedMessage.id);

      if (error) throw error;

      // Send reply email (you can implement this later)
      toast({
        title: "Reply sent!",
        description: "Your reply has been saved and marked as sent.",
      });

      setReplyMessage('');
      setSelectedMessage(null);
      fetchMessages();
    } catch (error) {
      console.error('Error sending reply:', error);
      toast({
        title: "Error",
        description: "Failed to send reply",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unread': return 'bg-red-500';
      case 'read': return 'bg-yellow-500';
      case 'replied': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Contact Messages Admin</h1>
        </div>

        {selectedMessage ? (
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    {selectedMessage.name}
                  </CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedMessage(null)}
                  >
                    ← Back to messages
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    {selectedMessage.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {formatDate(selectedMessage.created_at)}
                  </span>
                  <Badge className={getStatusColor(selectedMessage.status)}>
                    {selectedMessage.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Message:</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="whitespace-pre-wrap">{selectedMessage.message}</p>
                  </div>
                </div>

                {selectedMessage.reply_message && (
                  <div>
                    <h3 className="font-semibold mb-2">Your Reply:</h3>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="whitespace-pre-wrap">{selectedMessage.reply_message}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Sent: {selectedMessage.replied_at && formatDate(selectedMessage.replied_at)}
                      </p>
                    </div>
                  </div>
                )}

                {selectedMessage.status !== 'replied' && (
                  <div>
                    <h3 className="font-semibold mb-2">Send Reply:</h3>
                    <Textarea
                      placeholder="Type your reply here..."
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                      className="min-h-[120px] mb-4"
                    />
                    <Button 
                      onClick={sendReply}
                      disabled={!replyMessage.trim() || isSending}
                      className="flex items-center gap-2"
                    >
                      <Reply className="w-4 h-4" />
                      {isSending ? 'Sending...' : 'Send Reply'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="grid gap-4">
            {messages.length === 0 ? (
              <Card>
                <CardContent className="text-center py-8">
                  <Mail className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No messages yet</p>
                </CardContent>
              </Card>
            ) : (
              messages.map((message) => (
                <Card 
                  key={message.id}
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => {
                    setSelectedMessage(message);
                    if (message.status === 'unread') {
                      markAsRead(message.id);
                    }
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Badge className={getStatusColor(message.status)}>
                          {message.status}
                        </Badge>
                        <h3 className="font-semibold">{message.name}</h3>
                        <span className="text-sm text-muted-foreground">{message.email}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {formatDate(message.created_at)}
                      </span>
                    </div>
                    <p className="text-muted-foreground line-clamp-2">
                      {message.message}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;