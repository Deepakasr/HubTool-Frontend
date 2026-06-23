import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";

import ChatAssistant from "../pages/tools/ai/ChatAssistant";

// Category Pages
import PdfToolsPage from "../pages/category/PdfToolsPage";
import ImageToolsPage from "../pages/category/ImageToolsPage";

// Image Tools
import ImageCompress from "../pages/tools/images/ImageCompress";
import ImageResize from "../pages/tools/images/ImageResize";
// PDF Tools
import PdfMerge from "../pages/tools/PdfMerge";
import PdfSplit from "../pages/tools/SplitPdf";
import PdfCompress from "../pages/tools/PdfCompress";
import PdfToJpg from "../pages/tools/PdfToJpg";
import JpgToPdf from "../pages/tools/JpgToPdf";
import ProtectPdf from "../pages/tools/ProtectPdf";
import UnlockPdf from "../pages/tools/UnlockPdf";
import WatermarkPdf from "../pages/tools/WatermarkPdf";
import RotatePdf from "../pages/tools/RotatePdf";
import PageNumberPdf from "../pages/tools/PageNumberPdf";
import RemovePagesPdf from "../pages/tools/RemovePagesPdf";
import ExtractPagesPdf from "../pages/tools/ExtractPagesPdf";
import WordToPdf from "../pages/tools/WordToPdf";
import PdfToWord from "../pages/tools/PdfToWord";
import ExcelToPdf from "../pages/tools/ExcelToPdf";
import PptToPdf from "../pages/tools/PptToPdf";
import HtmlToPdf from "../pages/tools/HtmlToPdf";
import PdfViewer from "../pages/tools/PdfViewer";

import DeveloperToolsPage from "../pages/category/DeveloperToolsPage";
import TextToolsPage from "../pages/category/TextToolsPage";
import SocialToolsPage from "../pages/category/SocialToolsPage";
import UtilityToolsPage from "../pages/category/UtilityToolsPage";
import AiToolsPage from "../pages/category/AiToolsPage";
import VideoToolsPage from "../pages/category/VideoToolsPage";
import AudioToolsPage from "../pages/category/AudioToolsPage";
import OfficeToolsPage from "../pages/category/OfficeToolsPage";
import StudentToolsPage from "../pages/category/StudentToolsPage";
import DesignToolsPage from "../pages/category/DesignToolsPage";
import PremiumPlans from "../pages/premium/PremiumPlans";
import AuthPage from "../pages/auth/AuthPage";
import ProfilePage from "../pages/profile/ProfilePage";
import MySubscriptions from "../pages/profile/MySubscriptions";

function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* AI Tools */}
      <Route path="/ai-tools/chat-assistant" element={<ChatAssistant />} />

      {/* ImageToolsPage */}
      <Route path="/image-tools/image-compress" element={<ImageCompress />} />
      <Route path="/image-tools/image-resize" element={<ImageResize />} />

      {/* Auth */}
      <Route path="/auth" element={<AuthPage />} />

      {/* Profile */}
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/my-subscriptions" element={<MySubscriptions />} />

      {/* Categories */}
      <Route path="/pdf-tools" element={<PdfToolsPage />} />
      <Route path="/image-tools" element={<ImageToolsPage />} />
      <Route path="/developer-tools" element={<DeveloperToolsPage />} />
      <Route path="/text-tools" element={<TextToolsPage />} />
      <Route path="/video-tools" element={<VideoToolsPage />} />
      <Route path="/utility-tools" element={<UtilityToolsPage />} />
      <Route path="/social-tools" element={<SocialToolsPage />} />
      <Route path="/ai-tools" element={<AiToolsPage />} />
      <Route path="/audio-tools" element={<AudioToolsPage />} />
      <Route path="/office-tools" element={<OfficeToolsPage />} />
      <Route path="/student-tools" element={<StudentToolsPage />} />
      <Route path="/design-tools" element={<DesignToolsPage />} />

      {/* Premium */}
      <Route path="/premium" element={<PremiumPlans />} />
      {/* PDF Tools */}
      <Route path="/pdf-tools/pdf-merge" element={<PdfMerge />} />
      <Route path="/pdf-tools/pdf-split" element={<PdfSplit />} />
      <Route path="/pdf-tools/pdf-compress" element={<PdfCompress />} />
      <Route path="/pdf-tools/pdf-to-jpg" element={<PdfToJpg />} />
      <Route path="/pdf-tools/jpg-to-pdf" element={<JpgToPdf />} />
      <Route path="/pdf-tools/protect-pdf" element={<ProtectPdf />} />
      <Route path="/pdf-tools/unlock-pdf" element={<UnlockPdf />} />
      <Route path="/pdf-tools/watermark-pdf" element={<WatermarkPdf />} />
      <Route path="/pdf-tools/rotate-pdf" element={<RotatePdf />} />
      <Route path="/pdf-tools/page-number-pdf" element={<PageNumberPdf />} />
      <Route path="/pdf-tools/remove-pages-pdf" element={<RemovePagesPdf />} />
      <Route
        path="/pdf-tools/extract-pages-pdf"
        element={<ExtractPagesPdf />}
      />
      <Route path="/pdf-tools/word-to-pdf" element={<WordToPdf />} />
      <Route path="/pdf-tools/pdf-to-word" element={<PdfToWord />} />
      <Route path="/pdf-tools/excel-to-pdf" element={<ExcelToPdf />} />
      <Route path="/pdf-tools/ppt-to-pdf" element={<PptToPdf />} />
      <Route path="/pdf-tools/html-to-pdf" element={<HtmlToPdf />} />
      <Route path="/pdf-tools/pdf-viewer" element={<PdfViewer />} />
    </Routes>
  );
}

export default AppRoutes;
