const teamMembers = [
  { name: 'Hoàng Huy Hoàng', studentId: 'SE193680', initials: 'HH' },
  { name: 'Nguyễn Hồ Nhật Minh', studentId: 'SE190651', initials: 'NM' },
  { name: 'Phạm Xuân Hoàng', studentId: 'SE190821', initials: 'PH' },
  { name: 'Bùi Phương Vy', studentId: 'SS180727', initials: 'PV' },
  { name: 'Kiều Thị Ánh Tuyết', studentId: 'SS194300', initials: 'AT' },
];

export default function TeamContent() {
  return (
    <main className="team-container animate-fade-in">
      <header className="team-header">
        <span className="quiz-section-tag">NHÓM THUYẾT TRÌNH</span>
        <h2 className="quiz-main-title">Thành viên thực hiện</h2>
        <p className="quiz-subtitle">Cùng tìm hiểu lịch sử Đảng giai đoạn 1975–1986.</p>
      </header>
      <section className="team-grid" aria-label="Danh sách 5 thành viên">
        {teamMembers.map((member, index) => (
          <article className="team-card" key={member.studentId}>
            <span className="team-number">0{index + 1}</span>
            <div className="team-avatar" aria-hidden="true">{member.initials}</div>
            <div className="team-member-info">
              <h3>{member.name}</h3>
              <p className="team-student-id">{member.studentId}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
