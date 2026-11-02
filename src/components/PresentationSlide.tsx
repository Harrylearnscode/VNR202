export interface ContentBlock {
  heading: string;
  items: string[];
  tone?: 'green' | 'red' | 'gold';
}

export interface PresentationSlideData {
  title: string;
  section: string;
  period: string;
  blocks: ContentBlock[];
  summary: string;
  takeaway?: string;
}

export const presentationSlides: PresentationSlideData[] = [
  {
    section: 'BỐI CẢNH LỊCH SỬ', period: '1975', title: 'ĐẤT NƯỚC SAU CHIẾN TRANH',
    summary: '',
    blocks: [
      { heading: 'Mở đầu', items: ['30/4/1975: Giải phóng miền Nam.', 'Đất nước bước vào thời kỳ hòa bình và tiến tới thống nhất toàn diện.', 'Nhiệm vụ trọng tâm: Xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc.', '1975–1986: Giai đoạn khôi phục, xây dựng và từng bước đổi mới tư duy kinh tế.'], tone: 'red' },
      { heading: 'Thuận lợi', items: ['Đất nước độc lập, hòa bình, thống nhất; nhân dân có nguyện vọng chung là xây dựng lại đất nước.', 'Miền Bắc đã có kinh nghiệm xây dựng chủ nghĩa xã hội; tinh thần đoàn kết tạo thêm sức mạnh để khắc phục hậu quả chiến tranh.', 'Việt Nam nhận được sự ủng hộ, hợp tác của các nước xã hội chủ nghĩa và bạn bè quốc tế.'], tone: 'green' },
      { heading: 'Khó khăn', items: ['Chiến tranh để lại hậu quả nặng nề; cơ sở vật chất và hạ tầng bị tàn phá, nền kinh tế xuất phát thấp, sản xuất nhỏ còn phổ biến.', 'Hai miền có cơ chế kinh tế và hệ thống quản lý khác nhau, cần được thống nhất trên phạm vi cả nước.', 'Thiên tai, thiếu vốn và nguồn lực; các cuộc chiến tranh bảo vệ biên giới cùng tình trạng bao vây, cấm vận làm khó khăn thêm chồng chất.'], tone: 'gold' },
    ],
  },
  {
    section: 'THỐNG NHẤT NHÀ NƯỚC', period: '1976', title: 'HOÀN THÀNH THỐNG NHẤT VỀ MẶT NHÀ NƯỚC',
    summary: '',
    blocks: [
      { heading: 'Các mốc và quyết định', items: ['Tháng 8/1975, Hội nghị Trung ương 24 chủ trương sớm hoàn thành thống nhất nước nhà về mặt nhà nước để phát huy sức mạnh chung của cả nước.', '15–21/11/1975: Hội nghị Hiệp thương chính trị thống nhất hai miền nhất trí tổ chức Tổng tuyển cử chung.', '25/4/1976: Tổng tuyển cử bầu Quốc hội chung; hơn 23 triệu cử tri tham gia, đạt 98,77% tổng số cử tri.', '24/6–3/7/1976: Kỳ họp thứ nhất Quốc hội khóa VI quyết định tên nước là Cộng hòa xã hội chủ nghĩa Việt Nam, Thủ đô Hà Nội; đổi tên Sài Gòn thành Thành phố Hồ Chí Minh.', 'Các tổ chức chính trị – xã hội được thống nhất trên cả nước. Việc thống nhất nhà nước tạo cơ sở pháp lý, chính trị để cả nước cùng thực hiện nhiệm vụ xây dựng chủ nghĩa xã hội.'], tone: 'red' },
    ],
  },
  {
    section: 'ĐẠI HỘI IV · THÀNH TỰU VÀ HẠN CHẾ', period: '1976–1981', title: 'ĐẠI HỘI IV & THỰC TIỄN',
    summary: '',
    blocks: [
      { heading: 'Đại hội IV (14–20/12/1976)', items: ['Đại hội xác định đường lối đưa cả nước tiến lên chủ nghĩa xã hội, thông qua kế hoạch 5 năm 1976–1980 và đổi tên Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam.', 'Đẩy mạnh công nghiệp hóa xã hội chủ nghĩa; ưu tiên công nghiệp nặng một cách hợp lý trên cơ sở phát triển nông nghiệp và công nghiệp nhẹ.', 'Kết hợp xây dựng chủ nghĩa xã hội với bảo vệ Tổ quốc, củng cố quốc phòng, an ninh và mở rộng quan hệ hợp tác quốc tế.'], tone: 'red' },
      { heading: 'Thành tựu 1975–1981', items: ['Hoàn thành thống nhất nhà nước; bước đầu khôi phục sản xuất và xây dựng nền tảng chính trị – xã hội.', 'Bảo vệ chủ quyền, an ninh biên giới; khắc phục một phần hậu quả chiến tranh và thiên tai.'], tone: 'green' },
      { heading: 'Hạn chế và nguyên nhân', items: ['Nhiều chỉ tiêu kế hoạch không đạt; sản xuất và năng suất tăng chậm, lưu thông – phân phối rối ren, đời sống nhân dân khó khăn.', 'Một số mục tiêu và bước đi, nhất là đầu tư công nghiệp nặng, vượt quá khả năng thực tế; cơ chế tập trung, quan liêu, bao cấp làm giảm tính chủ động.', 'Khó khăn khách quan do hậu quả chiến tranh, thiên tai, xung đột biên giới và cấm vận; đồng thời có sai lầm chủ quan trong lãnh đạo, quản lý và bố trí cơ cấu kinh tế.'], tone: 'gold' },
    ],
  },
  {
    section: 'BƯỚC ĐỘT PHÁ ĐẦU TIÊN · 1979–1981', period: '1979–1981', title: 'BƯỚC ĐỘT PHÁ KINH TẾ ĐẦU TIÊN',
    summary: '',
    blocks: [
      { heading: 'Hội nghị Trung ương 6 khóa IV (8/1979)', items: ['Xác định cần khắc phục khuyết điểm trong quản lý kinh tế và cải tạo xã hội chủ nghĩa, tháo gỡ rào cản để sản xuất phát triển (“sản xuất bung ra”).', 'Chủ trương được cụ thể hóa bằng việc khuyến khích khai hoang, phục hóa và nới các hạn chế lưu thông sản phẩm.'], tone: 'red' },
      { heading: 'Chỉ thị 100-CT/TW (1/1981)', items: ['Mở rộng khoán sản phẩm đến nhóm và người lao động trong hợp tác xã nông nghiệp; xã viên nhận khoán một số khâu sản xuất và được hưởng phần vượt khoán.', 'Chính sách tạo thêm động lực lao động, góp phần tăng sản lượng lương thực và giảm lãng phí trong sản xuất nông nghiệp. Sản lượng lương thực bình quân tăng từ 13,4 triệu tấn/năm (1976–1980) lên 17 triệu tấn/năm (1981–1985).'], tone: 'gold' },
      { heading: 'Quyết định 25-CP và 26-CP (1/1981)', items: ['Mở rộng quyền chủ động sản xuất, kinh doanh và tự chủ tài chính cho xí nghiệp quốc doanh; vận dụng trả lương khoán, lương sản phẩm và tiền thưởng.', 'Những thử nghiệm này chưa thay đổi toàn bộ cơ chế, nhưng ghi nhận vai trò của lợi ích và quyền chủ động ở cơ sở, tạo tiền đề cho đổi mới tiếp theo.'], tone: 'green' },
    ],
  },
  {
    section: 'ĐẠI HỘI V · 1982', period: '1982', title: 'ĐẠI HỘI ĐẠI BIỂU TOÀN QUỐC LẦN THỨ V',
    summary: '',
    blocks: [
      { heading: 'Đại hội V (27–31/3/1982)', items: ['Đánh giá thành tựu, hạn chế và khó khăn; xác định Việt Nam đang ở chặng đường đầu tiên, lâu dài và phức tạp của thời kỳ quá độ.', 'Khẳng định hai nhiệm vụ chiến lược gắn bó: xây dựng chủ nghĩa xã hội và bảo vệ vững chắc Tổ quốc.', 'Trong chặng đường trước mắt, tập trung ổn định và từng bước cải thiện đời sống; thúc đẩy nông nghiệp, hàng tiêu dùng và hàng xuất khẩu.', 'Xác định nông nghiệp là mặt trận hàng đầu, kết hợp nông nghiệp với công nghiệp hàng tiêu dùng và một số ngành công nghiệp nặng thiết yếu.', 'Đại hội có điều chỉnh nhận thức nhưng vẫn chưa đánh giá đầy đủ vai trò của nền kinh tế nhiều thành phần và thị trường; một số chủ trương đầu tư, cải tạo còn nóng vội.'], tone: 'red' },
    ],
  },
  {
    section: 'CẢI CÁCH KINH TẾ · 1984–1985', period: '1984–1985', title: 'CẢI CÁCH KINH TẾ',
    summary: '',
    blocks: [
      { heading: 'Hội nghị Trung ương 6 và 7 (1984)', items: ['Hội nghị Trung ương 6 khóa V tập trung giải quyết vấn đề cấp bách về phân phối, lưu thông, thu mua và quản lý thị trường.', 'Hội nghị Trung ương 7 tiếp tục coi nông nghiệp, trước hết là lương thực – thực phẩm, là mặt trận hàng đầu trong kế hoạch năm 1985.'], tone: 'gold' },
      { heading: 'Hội nghị Trung ương 8 khóa V (6/1985)', items: ['Bước đột phá thứ hai: chủ trương xóa cơ chế tập trung quan liêu, bao cấp trong giá và lương, chuyển sang hạch toán kinh doanh.', 'Thực hiện cải cách giá – lương – tiền, hướng tới cơ chế một giá và trả lương bằng tiền gắn với hàng hóa.'], tone: 'red' },
      { heading: 'Kết quả và hạn chế', items: ['Chủ trương thể hiện quyết tâm thay đổi cơ chế quản lý và thừa nhận vai trò của sản xuất hàng hóa.', 'Khi triển khai, việc đổi tiền và điều chỉnh giá, lương tiến hành vội vàng, thiếu chuẩn bị và không đồng bộ với sản xuất.', 'Mất cân đối kinh tế và khủng hoảng kinh tế – xã hội trầm trọng hơn; bài học là cần chuẩn bị đầy đủ và gắn cải cách với điều kiện thực tế.'], tone: 'green' },
    ],
  },
  {
    section: 'CHUYỂN BIẾN TƯ DUY · 1986', period: '1986', title: 'BƯỚC ĐỘT PHÁ THỨ BA – CHUYỂN BIẾN TƯ DUY',
    summary: '',
    blocks: [
      { heading: 'Kết luận của Bộ Chính trị (8/1986)', items: ['Trước khủng hoảng kéo dài, Bộ Chính trị kết luận một số vấn đề thuộc quan điểm kinh tế. Đây là bước đột phá thứ ba, tổng hợp quá trình tìm tòi, thử nghiệm và khảo nghiệm thực tiễn trước Đại hội VI.'], tone: 'red' },
      { heading: 'Ba hướng đổi mới', items: ['Cơ cấu sản xuất và đầu tư: ưu tiên nông nghiệp, phát triển công nghiệp nhẹ và hàng xuất khẩu; lựa chọn quy mô, nhịp độ phù hợp cho công nghiệp nặng.', 'Cải tạo xã hội chủ nghĩa: lựa chọn bước đi, hình thức thích hợp và thừa nhận nền kinh tế có cơ cấu nhiều thành phần trong thời kỳ quá độ.', 'Cơ chế quản lý: đổi mới kế hoạch hóa, sử dụng phù hợp quan hệ hàng hóa – tiền tệ và mở rộng quyền tự chủ sản xuất, kinh doanh của cơ sở.'], tone: 'gold' },
      { heading: 'Ý nghĩa và bài học', items: ['Những nhận thức mới định hướng việc chuẩn bị Báo cáo chính trị trình Đại hội VI và tạo tiền đề cho đường lối Đổi mới toàn diện.', 'Tổng kết 1975–1986 cho thấy cần xuất phát từ thực tiễn, đánh giá đúng nguồn lực và điều chỉnh mục tiêu, bước đi cho phù hợp.'], tone: 'green' },
    ],
    takeaway: '',
  },
];

interface PresentationSlideProps {
  slide: PresentationSlideData;
  index: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  timelineMode?: boolean;
}

export default function PresentationSlide({ slide, index, total, onPrevious, onNext, timelineMode = false }: PresentationSlideProps) {
  const columnCount = slide.blocks.length > 3 ? 2 : slide.blocks.length;

  return (
    <main className={`presentation-slide-panel ${timelineMode ? 'timeline-detail-panel' : ''}`} aria-label={`${timelineMode ? 'Mốc' : 'Slide'} ${index + 1}: ${slide.title}`}>
      <div className="presentation-slide-scroll">
        <header className="presentation-slide-header">
          <div className="presentation-eyebrow">{timelineMode ? 'MỐC' : 'SLIDE'} {String(index + 1).padStart(2, '0')} <span>·</span> {slide.section}</div>
          <h1>{slide.title}</h1>
        </header>
        <div className="presentation-blocks" style={{ '--block-columns': columnCount } as React.CSSProperties}>
          {slide.blocks.map((block, blockIndex) => (
            <section className={`presentation-block tone-${block.tone ?? 'green'}`} key={`${block.heading}-${blockIndex}`}>
              <h2>{block.heading}</h2>
              <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          ))}
        </div>
        {slide.takeaway && <p className="presentation-takeaway">{slide.takeaway}</p>}
      </div>
      <footer className="presentation-slide-footer">
        <button className="presentation-nav-button" onClick={onPrevious} disabled={index === 0}>← <span>{timelineMode ? 'Mốc trước' : 'Slide trước'}</span></button>
        <span className="presentation-footer-count">{index + 1} / {total}</span>
        <button className="presentation-nav-button next" onClick={onNext} disabled={index === total - 1}><span>{timelineMode ? 'Mốc tiếp theo' : 'Slide tiếp theo'}</span> →</button>
      </footer>
    </main>
  );
}
