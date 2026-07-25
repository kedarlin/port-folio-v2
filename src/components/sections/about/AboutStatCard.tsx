type Props = {
  value: string;
  label: string;
};

export default function AboutStatCard({ value, label }: Props) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="text-3xl font-bold">{value}</h3>

      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
