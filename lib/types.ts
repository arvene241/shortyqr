export interface LinkProps {
  id: string,
  link: string,
  custom_bitlinks: string[],
  long_url: string,
  archived: boolean,
  tags: string[],
  deeplinks: string[],
}

export interface QrCodeProps {
  data: string;
  size?: string;
  color?: string;
  bgcolor?: string;
  margin?: number;
  format?: string;
}