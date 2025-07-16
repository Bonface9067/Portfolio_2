import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// API functions for portfolio data
export const portfolioApi = {
  async getProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('featured', { ascending: false });
    
    if (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
    return data || [];
  },

  async getWorkExperience() {
    const { data, error } = await supabase
      .from('work_experience')
      .select('*')
      .order('duration', { ascending: false });
    
    if (error) {
      console.error('Error fetching work experience:', error);
      return [];
    }
    return data || [];
  },

  async getPublications() {
    const { data, error } = await supabase
      .from('publications')
      .select('*')
      .order('date', { ascending: false });
    
    if (error) {
      console.error('Error fetching publications:', error);
      return [];
    }
    return data || [];
  },

  async getSkills() {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('category', { ascending: true });
    
    if (error) {
      console.error('Error fetching skills:', error);
      return [];
    }
    return data || [];
  },

  async getClients() {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('name', { ascending: true });
    
    if (error) {
      console.error('Error fetching clients:', error);
      return [];
    }
    return data || [];
  },

  async getPortfolioUpdates() {
    const { data, error } = await supabase
      .from('portfolio_updates')
      .select('*')
      .order('date', { ascending: false })
      .limit(5);
    
    if (error) {
      console.error('Error fetching portfolio updates:', error);
      return [];
    }
    return data || [];
  },

  async submitContactForm(formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{
        ...formData,
        created_at: new Date().toISOString()
      }]);
    
    if (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
    return data;
  }
};