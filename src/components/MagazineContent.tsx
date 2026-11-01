import { useState } from 'react';

export interface MediaItem {
  type: 'image';
  url: string;
  thumbnail?: string;
  title: string;
  caption: string;
}

export interface MilestoneData {
  year: string;
  title: string;
  subtitle: string;
  quote: string;
  description: string;
  story: string;
  stats: {
    value: string;
    label: string;
    desc: string;
  }[];
  highlights: string[];
  media: MediaItem[];
}

import { presentationSlides } from './PresentationSlide';

const mediaByPeriod: Record<string, MediaItem[]> = {
  '1975': [{ type: 'image', url: '/dat-nuoc-sau-chien-tranh.jpg', title: 'Đất nước sau chiến tranh', caption: 'Bối cảnh đất nước sau ngày giải phóng miền Nam năm 1975.' }],
  '1976': [{ type: 'image', url: '/thong-nhat-nha-nuoc.jpg', title: 'Thống nhất nhà nước', caption: 'Hoàn thành thống nhất đất nước về mặt nhà nước.' }],
  '1976–1981': [{ type: 'image', url: '/dai-hoi-4.jpg', title: 'Đại hội đại biểu toàn quốc lần thứ IV', caption: 'Đại hội IV đề ra đường lối xây dựng đất nước sau thống nhất.' }],
  '1979–1981': [{ type: 'image', url: '/buoc-dot-pha-dau-tien.jpg', title: 'Bước đột phá kinh tế đầu tiên', caption: 'Những điều chỉnh bước đầu nhằm tháo gỡ khó khăn trong sản xuất.' }],
  '1982': [{ type: 'image', url: '/dai-hoi-dai-bieu-toan-quoc-lan-5.jpg', title: 'Đại hội đại biểu toàn quốc lần thứ V', caption: 'Đại hội V xác định phương hướng xây dựng và bảo vệ Tổ quốc.' }],
  '1984–1985': [{ type: 'image', url: '/cai-cach-kinh-te.jpg', title: 'Cải cách kinh tế', caption: 'Những chủ trương cải cách giá – lương – tiền giai đoạn 1984–1985.' }],
  '1986': [{ type: 'image', url: '/chuyen-bien-tu-duy.jpg', title: 'Chuyển biến tư duy kinh tế', caption: 'Bước chuyển trong tư duy kinh tế năm 1986.' }],
};

export const milestonesData: MilestoneData[] = presentationSlides.map((slide) => ({
  year: slide.period,
  title: slide.title,
  subtitle: slide.section,
  quote: '',
  description: slide.blocks.map((block) => `• ${block.items.join(' ')}`).join('\n'),
  story: '',
  stats: slide.blocks.map((block, index) => ({
    value: String(index + 1).padStart(2, '0'),
    label: block.heading,
    desc: '',
  })),
  highlights: [],
  media: mediaByPeriod[slide.period] ?? [],
}));
interface MagazineContentProps {
  milestoneIndex: number;
  onNext: () => void;
  onBack: () => void;
  isLast: boolean;
  isVisible: boolean;
}

export default function MagazineContent({
  milestoneIndex,
  onNext,
  onBack,
  isLast,
  isVisible
}: MagazineContentProps) {
  const data = milestonesData[milestoneIndex];
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  if (!data) return null;

  const currentMedia = data.media[activeMediaIndex] ?? data.media[0];

  return (
    <div className={`magazine-container ${isVisible ? 'fade-in' : 'fade-out'}`}>

      {/* Background Watermark Year */}
      <div className="watermark-year">{data.year}</div>

      <div className="magazine-layout">

        {/* Header Section */}
        <header className="magazine-header">
          <div className="magazine-year-tag">{data.year}</div>
          <h1 className="magazine-title">{data.title}</h1>
          <h3 className="magazine-subtitle">{data.subtitle}</h3>
          <div className="decorative-line"></div>
        </header>

        {/* Content Body Grid */}
        <div className="magazine-body">

          {/* Left Column: Story and Narrative */}
          <div className="magazine-col-left">
            {data.quote && <blockquote className="magazine-quote">
              <span className="quote-mark">“</span>
              {data.quote}
            </blockquote>}
            <p className="magazine-description">{data.description}</p>
            {data.story && <p className="magazine-story">{data.story}</p>}

            {data.highlights.length > 0 && <div className="magazine-highlights">
              <h4>Điểm nhấn sự kiện:</h4>
              <ul>
                {data.highlights.map((item, idx) => (
                  <li key={idx}>
                    <span className="bullet">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>}
          </div>

          {/* Right Column: Multimedia Showcase & Statistics Card */}
          <div className="magazine-col-right">

            {/* Image media slot; add image URLs to this milestone's media data. */}
            <div className="multimedia-card">
              <div className="multimedia-header">
                <div className="multimedia-title">
                  <span>🖼️</span> Tư liệu hình ảnh
                </div>
                {data.media.length > 1 && (
                  <div className="media-type-tabs">
                    {data.media.map((_, idx) => (
                      <button
                        key={idx}
                        className={`media-tab-btn ${activeMediaIndex === idx ? 'active' : ''}`}
                        onClick={() => setActiveMediaIndex(idx)}
                      >
                        Ảnh {idx + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {currentMedia && (
                <div className="media-content-display">
                  {currentMedia.url ? (
                    <div className="media-image-frame" onClick={() => setLightboxOpen(true)} title="Click để phóng to ảnh">
                      <img src={currentMedia.url} alt={currentMedia.title} />
                      <div className="media-zoom-overlay"><span>🔍 Phóng to ảnh tư liệu</span></div>
                    </div>
                  ) : (
                    <div className="media-image-frame media-image-placeholder">
                      <span>＋</span>
                      <p>Vị trí chèn ảnh tư liệu</p>
                    </div>
                  )}
                  <div className="media-caption-box">
                    <div className="media-caption-title">{currentMedia.title}</div>
                    <div className="media-caption-text">{currentMedia.caption}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Statistics Card */}
            <div className="stats-card">
              <h4 className="stats-card-title">NỘI DUNG CHÍNH</h4>
              <div className="stats-grid">
                {data.stats.map((stat, idx) => (
                  <div className="stat-item" key={idx}>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                    {stat.desc && <span className="stat-desc">{stat.desc}</span>}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Footer Navigation controls */}
        <footer className="magazine-footer">
          <button className="btn-back" onClick={onBack}>
            <span className="arrow">←</span> Quay lại Timeline
          </button>

          {!isLast && (
            <button className="btn-next-step" onClick={onNext}>
              Tiếp theo <span className="arrow">→</span>
            </button>
          )}
        </footer>

      </div>

      {/* Lightbox Modal for Full-Screen Image Viewing */}
      {lightboxOpen && currentMedia?.url && (
        <div className="lightbox-modal" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setLightboxOpen(false)} aria-label="Đóng">
              &times;
            </button>
            <div className="lightbox-body">
              <div className="lightbox-media-container">
                <img src={currentMedia.url} alt={currentMedia.title} />
              </div>
              <div className="lightbox-info">
                <div className="lightbox-year-badge">{data.year}</div>
                <h3 className="lightbox-title">{currentMedia.title}</h3>
                <p className="lightbox-caption">{currentMedia.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
