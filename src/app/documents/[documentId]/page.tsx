import { Editor } from "./editor";

interface DocumentIdPageProps {
  params: Promise<{
    documentId: string;
  }>;
}

export default async function DocumentIdPage({ params }: DocumentIdPageProps) {
  const { documentId } = await params;

  return (
    <div>
      document id: <span className="text-red-400">{documentId}</span>
      <Editor />
    </div>
  );
}
