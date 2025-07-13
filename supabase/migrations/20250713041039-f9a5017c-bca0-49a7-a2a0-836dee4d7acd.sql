-- Create contact_messages table with all required columns
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread',
  reply_message TEXT,
  replied_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow reading all messages (for admin)
CREATE POLICY "Allow reading contact messages" ON public.contact_messages
  FOR SELECT USING (true);

-- Create policy to allow inserting messages (for contact form)
CREATE POLICY "Allow inserting contact messages" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

-- Create policy to allow updating messages (for admin replies)
CREATE POLICY "Allow updating contact messages" ON public.contact_messages
  FOR UPDATE USING (true);