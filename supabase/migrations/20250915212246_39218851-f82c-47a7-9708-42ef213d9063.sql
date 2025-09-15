-- Remove unnecessary PII fields from profiles table to reduce data collection
ALTER TABLE public.profiles DROP COLUMN IF EXISTS address;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS phone;