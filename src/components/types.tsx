export interface User {
  name: string;
  location?: string;
  total_photos: number;
  portfolio_url?: string;
}

export interface Img {
  alt_description: string;
  urls: {
    regular: string;
  };
  likes: number;
  description?: string;
  user: User;
}

export interface ImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  img: Img;
}
