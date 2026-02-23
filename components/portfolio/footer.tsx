export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <p className="font-serif text-sm text-foreground">Pat Leetongin</p>
        <p className="text-xs text-muted-foreground">
          {"© 2026. All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
