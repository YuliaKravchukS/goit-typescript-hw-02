export type Image = {
  id: number;
  urls: {
    [x: string]: string;
  };
  likes: number;
  description: string;
  user: {
    [y: string]: string;
  };
  alt_description: string;
};

// export type Status = "loading" | "idle" | "error";
