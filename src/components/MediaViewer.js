import { useState, useEffect, useCallback } from "react";

const mediaViewerStyles = `
  .media-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
  }

  .media-thumb {
    width: 90px;
    height: 70px;
    object-fit: cover;
    border-radius: 6px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  }

  .media-thumb:hover {
    border-color: #695aa6;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(105, 90, 166, 0.3);
  }

  .media-thumb-video {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .media-thumb-video video {
    width: 90px;
    height: 70px;
    object-fit: cover;
    border-radius: 6px;
    border: 2px solid transparent;
    transition: border-color 0.2s, transform 0.2s;
    pointer-events: none;
  }

  .media-thumb-video:hover video {
    border-color: #695aa6;
    transform: scale(1.05);
  }

  .media-play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 28px;
    height: 28px;
    background: rgba(105, 90, 166, 0.85);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 12px;
    pointer-events: none;
  }

  .media-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.88);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: fadeInBackdrop 0.2s ease;
  }

  @keyframes fadeInBackdrop {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .media-modal-inner {
    position: relative;
    max-width: 92vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: scaleIn 0.2s ease;
  }

  @keyframes scaleIn {
    from { transform: scale(0.92); opacity: 0; }
    to   { transform: scale(1);    opacity: 1; }
  }

  .media-modal-img {
    max-width: 90vw;
    max-height: 82vh;
    object-fit: contain;
    border-radius: 8px;
    display: block;
  }

  .media-modal-video {
    max-width: 90vw;
    max-height: 82vh;
    border-radius: 8px;
    display: block;
  }

  .media-modal-close {
    position: fixed;
    top: 18px;
    right: 22px;
    background: rgba(255,255,255,0.12);
    border: none;
    color: #fff;
    font-size: 22px;
    line-height: 1;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
    z-index: 10000;
  }

  .media-modal-close:hover {
    background: rgba(105, 90, 166, 0.7);
  }

  .media-modal-nav {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.12);
    border: none;
    color: #fff;
    font-size: 20px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
    z-index: 10000;
  }

  .media-modal-nav:hover {
    background: rgba(105, 90, 166, 0.7);
  }

  .media-modal-nav.prev { left: 14px; }
  .media-modal-nav.next { right: 14px; }

  .media-modal-counter {
    margin-top: 12px;
    color: rgba(255,255,255,0.6);
    font-size: 13px;
    letter-spacing: 0.5px;
  }

  .media-modal-caption {
    margin-top: 8px;
    color: rgba(255,255,255,0.85);
    font-size: 14px;
    text-align: center;
    max-width: 600px;
  }
`;

function isVideo(src) {
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(src);
}

function MediaThumbnail({ item, onClick }) {
  const src = typeof item === "string" ? item : item.src;
  const caption = typeof item === "string" ? "" : item.caption || "";

  if (isVideo(src)) {
    return (
      <div
        className="media-thumb-video"
        onClick={onClick}
        title={caption || "Click to view video"}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
      >
        <video src={src} muted playsInline preload="metadata" />
        <span className="media-play-icon" aria-hidden="true">▶</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={caption || "Project media"}
      className="media-thumb"
      onClick={onClick}
      title={caption || "Click to expand"}
    />
  );
}

export default function MediaViewer({ media = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() =>
    setActiveIndex((i) => (i - 1 + media.length) % media.length),
    [media.length]
  );

  const next = useCallback(() =>
    setActiveIndex((i) => (i + 1) % media.length),
    [media.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, close, prev, next]);

  if (!media.length) return null;

  const current = media[activeIndex];
  const currentSrc = current ? (typeof current === "string" ? current : current.src) : null;
  const currentCaption = current ? (typeof current === "string" ? "" : current.caption || "") : "";

  return (
    <>
      <style>{mediaViewerStyles}</style>

      <div className="media-grid" role="list" aria-label="Project media">
        {media.map((item, i) => (
          <div key={i} role="listitem">
            <MediaThumbnail item={item} onClick={() => setActiveIndex(i)} />
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="media-modal-backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Media viewer"
        >
          <button
            className="media-modal-close"
            onClick={close}
            aria-label="Close"
          >
            ✕
          </button>

          {media.length > 1 && (
            <>
              <button
                className="media-modal-nav prev"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                className="media-modal-nav next"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next"
              >
                ›
              </button>
            </>
          )}

          <div
            className="media-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo(currentSrc) ? (
              <video
                key={currentSrc}
                src={currentSrc}
                className="media-modal-video"
                controls
                autoPlay
              />
            ) : (
              <img
                key={currentSrc}
                src={currentSrc}
                alt={currentCaption || "Project media"}
                className="media-modal-img"
              />
            )}

            {currentCaption && (
              <p className="media-modal-caption">{currentCaption}</p>
            )}

            {media.length > 1 && (
              <p className="media-modal-counter">
                {activeIndex + 1} / {media.length}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}