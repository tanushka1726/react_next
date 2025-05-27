'use client';

import { useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

type Chapter = {
  title: string;
  images: string[];
  locked: boolean;
};

const chaptersData: Chapter[] = [
  {
    title: 'Introduction',
    images: [
      '/books/think-and-grow-rich/introduction/Think-And-Grow-Rich_page-0001.jpg',
      '/books/think-and-grow-rich/introduction/Think-And-Grow-Rich_page-0002.jpg',
      '/books/think-and-grow-rich/introduction/Think-And-Grow-Rich_page-0003.jpg',
      '/books/think-and-grow-rich/introduction/Think-And-Grow-Rich_page-0004.jpg',
      '/books/think-and-grow-rich/introduction/Think-And-Grow-Rich_page-0005.jpg',
      '/books/think-and-grow-rich/introduction/Think-And-Grow-Rich_page-0006.jpg',
      '/books/think-and-grow-rich/introduction/Think-And-Grow-Rich_page-0007.jpg',
      '/books/think-and-grow-rich/introduction/Think-And-Grow-Rich_page-0008.jpg',
    ],
    locked: false,
  },
  {
    title: 'Chapter 1',
    images: [
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0020.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0022.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0023.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0024.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0025.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0026.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0027.jpg',
    ],
    locked: false,
  },
  {
    title: 'Chapter 2',
    images: [
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0033.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0034.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0035.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0036.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0037.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0038.jpg',
    ],
    locked: false,
  },
  {
    title: 'Chapter 3',
    images: [
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0051.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0052.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0053.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0054.jpg',
    ],
    locked: false,
  },
  {
    title: 'Chapter 4',
    images: [
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0070.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0071.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0072.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0073.jpg',
    ],
    locked: true,
  },
  {
    title: 'Chapter 5',
    images: [
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0077.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0078.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0079.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0080.jpg',
    ],
    locked: true,
  },
  {
    title: 'Chapter 6',
    images: [
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0104.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0105.jpg',
      '/books/think-and-grow-rich/chapter-1/Think-And-Grow-Rich_page-0106.jpg',
    ],
    locked: true,
  },
];

const ZOOM_STEPS = [1, 1.5, 2, 2.5]; // 4 zoom levels progressively

export default function BookReaderPage() {
  const params = useParams() as { book_name: string };
  const rightContainerRef = useRef<HTMLDivElement>(null);

  const [selectedChapterIdx, setSelectedChapterIdx] = useState(0);
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  const [zoomLevelIndex, setZoomLevelIndex] = useState(0);

  const selectedChapter = chaptersData[selectedChapterIdx];

  const onSelectChapter = (index: number) => {
    if (chaptersData[index].locked) return;
    setSelectedChapterIdx(index);
    setCurrentPageIdx(0);
    setZoomLevelIndex(0);
    if (rightContainerRef.current) {
      rightContainerRef.current.scrollTop = 0;
    }
  };

  const onNextPage = () => {
    if (currentPageIdx < selectedChapter.images.length - 1) {
      setCurrentPageIdx(currentPageIdx + 1);
      setZoomLevelIndex(0);
      if (rightContainerRef.current) {
        rightContainerRef.current.scrollTop = 0;
      }
    }
  };

  const onPrevPage = () => {
    if (currentPageIdx > 0) {
      setCurrentPageIdx(currentPageIdx - 1);
      setZoomLevelIndex(0);
      if (rightContainerRef.current) {
        rightContainerRef.current.scrollTop = 0;
      }
    }
  };

  const toggleZoom = () => {
    setZoomLevelIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % ZOOM_STEPS.length;
      if (rightContainerRef.current && nextIndex > 0) {
        rightContainerRef.current.scrollTop = 0;
      }
      return nextIndex;
    });
  };

  const isLastPageOfFreeChapter =
    !selectedChapter.locked &&
    currentPageIdx === selectedChapter.images.length - 1 &&
    selectedChapterIdx === 3;

  return (
    <>
      <style jsx>{`
        /* Custom scrollbar for left sidebar */
        .chapters-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .chapters-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(0, 123, 255, 0.5);
          border-radius: 4px;
        }
        .chapters-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 123, 255, 0.5) transparent;
        }
        .list-group-item.clickable:hover:not(.disabled) {
          background-color: #e9f5ff;
          color: #0d6efd;
          cursor: pointer;
          border-left: 4px solid #0d6efd;
        }
        .list-group-item.active {
          background-color: #0d6efd;
          color: white;
          border-left: 4px solid #0b5ed7;
          font-weight: 600;
        }
        .unlock-btn {
          font-size: 0.8rem;
          padding: 0.2rem 0.6rem;
        }
        .controls {
          margin-top: 1rem;
          user-select: none;
        }
        img {
          -webkit-user-drag: none;
          user-drag: none;
          display: block;
          margin: 0 auto;
        }
      `}</style>
      <div
        className="container-fluid d-flex flex-column p-3"
        style={{ height: 'calc(100vh - 70px)', overflow: 'hidden' }}
      >
        <h2 className="mb-4 text-center text-primary fw-bold">
          {params.book_name?.replace(/-/g, ' ').toUpperCase()}
        </h2>
        <div className="row flex-grow-1" style={{ height: '100%' }}>
          <div
            className="col-md-3 border-end bg-white chapters-scroll"
            style={{
              position: 'sticky',
              top: 0,
              height: '100%',
              overflowY: 'auto',
              paddingRight: '1rem',
              zIndex: 10,
            }}
          >
            <h4 className="mb-3 fw-semibold text-secondary">Chapters</h4>
            <ul className="list-group shadow-sm rounded">
              {chaptersData.map((chapter, idx) => (
                <li
                  key={idx}
                  onClick={() => onSelectChapter(idx)}
                  className={`list-group-item d-flex justify-content-between align-items-center ${
                    selectedChapterIdx === idx ? 'active' : ''
                  } ${chapter.locked ? 'disabled text-muted' : 'clickable'}`}
                  style={{ cursor: chapter.locked ? 'not-allowed' : 'pointer' }}
                  title={chapter.locked ? 'Premium Chapter - Unlock to Read' : ''}
                >
                  <span>{chapter.title}</span>
                  {chapter.locked && (
                    <button
                      className="btn btn-outline-primary btn-sm unlock-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert('Please purchase premium to unlock this chapter!');
                      }}
                    >
                      Unlock
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={rightContainerRef}
            className="col-md-9 d-flex flex-column align-items-center"
            style={{
              height: '100%',
              overflowY: 'auto',
              paddingLeft: '2rem',
              position: 'relative',
              paddingBottom: '1rem',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              scrollPaddingTop: '1rem',
            }}
          >
            <h4 className="mb-3 text-primary fw-semibold">{selectedChapter.title}</h4>

            {!isLastPageOfFreeChapter ? (
              <>
                <div
                  className="d-flex justify-content-center align-items-start flex-grow-1"
                  style={{
                    width: '100%',
                    overflow: zoomLevelIndex > 0 ? 'auto' : 'hidden',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(13, 110, 253, 0.3)',
                    backgroundColor: '#f8f9fa',
                    userSelect: 'none',
                    maxHeight: 'calc(100vh - 200px)',
                  }}
                >
                  <img
                    src={selectedChapter.images[currentPageIdx]}
                    alt={`Page ${currentPageIdx + 1} of ${selectedChapter.title}`}
                    onClick={toggleZoom}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      cursor: zoomLevelIndex === 0 ? 'zoom-in' : 'zoom-out',
                      transform: `scale(${ZOOM_STEPS[zoomLevelIndex]})`,
                      transformOrigin: zoomLevelIndex === 0 ? 'center center' : 'top center',
                      transition: 'transform 0.3s ease',
                      userSelect: 'none',
                      borderRadius: '8px',
                    }}
                    draggable={false}
                  />
                </div>

                <div className="controls w-100 d-flex justify-content-between align-items-center mt-3 px-2">
                  <button
                    className="btn btn-outline-primary btn-lg"
                    onClick={onPrevPage}
                    disabled={currentPageIdx === 0}
                    aria-label="Previous Page"
                  >
                    &larr; Previous
                  </button>

                  <span className="text-muted fw-medium">
                    Page {currentPageIdx + 1} of {selectedChapter.images.length}
                  </span>

                  <button
                    className="btn btn-outline-primary btn-lg"
                    onClick={onNextPage}
                    disabled={currentPageIdx === selectedChapter.images.length - 1}
                    aria-label="Next Page"
                  >
                    Next &rarr;
                  </button>
                </div>
              </>
            ) : (
              <div
                className="alert alert-warning w-100 text-center mt-4 shadow rounded"
                style={{ fontSize: '1.2rem' }}
              >
                <h5 className="mb-3">Unlock next chapter with premium!</h5>
                <button
                  className="btn btn-primary btn-lg px-4"
                  onClick={() => alert('Redirecting to premium purchase page...')}
                >
                  Unlock Premium
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

