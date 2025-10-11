export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: React.ReactNode;
  description?: string;
  image?: string;
}

export interface ProfileData {
  name: string;
  description: string;
  imageUrl: string;
}
