const env = import.meta.env;

export const contactInfo = {
  email: env.VITE_CONTACT_EMAIL ?? '',
  phone: env.VITE_CONTACT_PHONE ?? '',
  linkedinUrl: env.VITE_LINKEDIN_URL ?? '',
  linkedinHandle: env.VITE_LINKEDIN_HANDLE ?? '',
  githubUrl: env.VITE_GITHUB_URL ?? '',
  githubHandle: env.VITE_GITHUB_HANDLE ?? '',
};
