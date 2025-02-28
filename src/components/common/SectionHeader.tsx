interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader = ({
  title,
  subtitle,
  align = 'center'
}: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="mb-3">{title}</h2>
      {subtitle && (
        <p className="text-gray text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}; 