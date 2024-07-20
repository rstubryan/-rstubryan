interface ImagePlaceholderProps {
  className?: string;
}

export default function ImagePlaceholder({ className }: ImagePlaceholderProps) {
  const image = "https://avatars.githubusercontent.com/u/96672455?v=4";

  return (
    <img
      src={image}
      alt="rstubryan"
      className={`w-48 h-48 bg-gray-300 rounded-md shadow-md ${className}`}
    />
  );
}
