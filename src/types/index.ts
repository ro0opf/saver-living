export interface LinkItem {
  id: string;
  title: string;
  url: string;
  type: 'instagram' | 'youtube' | 'blog' | 'kakao' | 'email' | 'website';
  icon: React.ReactNode;
}

export interface ProfileData {
  name: string;
  description: string;
  imageUrl: string;
}
