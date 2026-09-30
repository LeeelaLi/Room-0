type BreadcrumbProps = {
  navigationStack: string[];
};

export default function Breadcrumb({
  navigationStack,
}: BreadcrumbProps) {
  if (navigationStack.length < 2) {
    return null;
  }

  return (
    <nav className="breadcrumb">
      {navigationStack.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className="breadcrumb-item"
        >
          {index > 0 && (
            <span className="breadcrumb-separator">
              &gt;
            </span>
          )}

          <span>
            {item.replaceAll("_", " ")}
          </span>
        </span>
      ))}
    </nav>
  );
}