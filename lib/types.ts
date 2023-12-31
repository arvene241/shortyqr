export interface LinkProps {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
}

export interface QrCodeProps {
  data: string;
  size?: string;
  color?: string;
  bgcolor?: string;
  margin?: number;
  format?: string;
}