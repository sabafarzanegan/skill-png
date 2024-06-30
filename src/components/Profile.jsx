import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile({ avatar, name }) {
  const [f, l] = name.split(" ").map((word) => word[0]);

  return (
    <Avatar className="w-24 h-24">
      <AvatarImage src={avatar} alt="@shadcn" />
      <AvatarFallback>{f + l}</AvatarFallback>
    </Avatar>
  );
}
