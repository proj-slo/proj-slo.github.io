import { Button } from "@/components/ui/button";
import { useRouter } from "@/hooks/use-router";
import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";
import QRCode from "react-qr-code";

const DEBUG = false;

const SharePage: React.FC = () => {
  const { navigate } = useRouter();
  const shareUrl = "https://proj-slo.github.io/";

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center h-screen gap-5",
        {
          "border-2 border-red-500": DEBUG,
        },
      )}
    >
      <pre
        className={cn(
          "flex items-center justify-start font-semibold text-3xl",
          {
            "border-2 border-blue-500": DEBUG,
          },
        )}
      >
        {shareUrl}
      </pre>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <QRCode 
          value={shareUrl}
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        />
      </div>
      
      <p className="text-sm text-gray-500 mt-2">Scan this QR code to visit the site</p>
    </div>
  );
};

export default SharePage;
