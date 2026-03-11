interface PDFViewerProps {
  src: string;
  height?: string;
}

export function PDFViewerEmbed({ src, height = "700px" }: PDFViewerProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden border border-border bg-secondary">
      <iframe
        src={src}
        style={{ height }}
        className="w-full"
        title="PDF Viewer"
      />
    </div>
  );
}
