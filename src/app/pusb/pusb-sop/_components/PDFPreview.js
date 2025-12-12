import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { MoreActionsPopover } from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const EngSOP = `${process.env.PUBLIC_URL}/assets/eng-sop.pdf`;
const IndoSOP = `${process.env.PUBLIC_URL}/assets/indo-sop.pdf`;

const PDFViewer = ({ isEnglish }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [isEnglish]);

  const workerUrl = "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

  const renderToolbar = useCallback((Toolbar) => {
    return (
      <Toolbar>
        {(toolbarSlot) => {
          const {
            CurrentPageInput,
            GoToNextPage,
            GoToPreviousPage,
            NumberOfPages,
            Download,
            Zoom,
            ZoomIn,
            ZoomOut,
          } = toolbarSlot || {};

          return (
            <div className="rpv-toolbar" role="toolbar" aria-orientation="horizontal">
              <div className="rpv-toolbar__left">
                <div className="rpv-toolbar__item">{GoToPreviousPage && <GoToPreviousPage />}</div>
                <div className="rpv-toolbar__item">
                  {CurrentPageInput ? (
                    <>
                      <CurrentPageInput />
                      <span className="rpv-toolbar__label">
                        / {NumberOfPages ? <NumberOfPages /> : "?"}
                      </span>
                    </>
                  ) : (
                    <span>Loading...</span>
                  )}
                </div>
                <div className="rpv-toolbar__item">{GoToNextPage && <GoToNextPage />}</div>
              </div>
              <div className="rpv-toolbar__center">
                <div className="rpv-toolbar__item">{ZoomOut && <ZoomOut />}</div>
                <div className="rpv-toolbar__item">{Zoom && <Zoom />}</div>
                <div className="rpv-toolbar__item">{ZoomIn && <ZoomIn />}</div>
              </div>
              <div className="rpv-toolbar__right">
                <div className="rpv-toolbar__item">{Download && <Download />}</div>
                <div className="rpv-toolbar__item">
                  {toolbarSlot && <MoreActionsPopover toolbarSlot={toolbarSlot} />}
                </div>
              </div>
            </div>
          );
        }}
      </Toolbar>
    );
  }, []);

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
    sidebarTabs: () => [],
  });
  

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <Worker workerUrl={workerUrl}>
        <div className="h-[80vh] w-[90%] border rounded shadow-lg overflow-hidden">
          {loading ? (
            <div className="text-gray-500">Loading PDF...</div>
          ) : (
            <Viewer
              fileUrl={isEnglish ? EngSOP : IndoSOP}
              plugins={[defaultLayoutPluginInstance]}
              onError={(error) => console.error("Failed to load PDF:", error)}
            />
          )}
        </div>
      </Worker>
    </div>
  );
};

export default PDFViewer;
