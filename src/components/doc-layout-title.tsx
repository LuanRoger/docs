type DocLayoutTitleProps = {
  title: string;
  description: string;
};

export function DocLayoutTitle({ title, description }: DocLayoutTitleProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-pixel text-3xl text-ts-package-template">{title}</h1>
      <p className="text-muted-foreground text-xs">{description}</p>
    </div>
  );
}
