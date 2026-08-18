import { Badge } from "@/components/Badge";

type StepHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function StepHeader({ eyebrow, title, description }: StepHeaderProps) {
  return (
    <div className="mb-8 space-y-4">
      <Badge>{eyebrow}</Badge>
      <div className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-black leading-tight text-ink md:text-5xl">{title}</h1>
        <p className="text-base leading-7 text-ink/70 md:text-lg">{description}</p>
      </div>
    </div>
  );
}

