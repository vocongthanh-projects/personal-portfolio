export const profile = {
  name: "Thanh Vo",
  role: "Kỹ sư QA Automation & Chuyên viên kiểm thử xâm nhập",
  email: "vocongthanh21022000@gmail.com",
  github: "https://github.com/vocongthanh247",
  githubLabel: "github.com/vocongthanh247",
  linkedin: "https://www.linkedin.com/in/thanh-vo-56785b2b0/",
  linkedinLabel: "linkedin.com/in/thanh-vo-56785b2b0",
  htb: "https://profile.hackthebox.com/profile/019f2344-16b3-700f-be3a-9af139dfee51",
  htbLabel: "Hồ sơ Hack The Box",
  location: "Việt Nam",
} as const;

export const proofPoints = [
  { value: "05", label: "Repository kỹ thuật công khai" },
  { value: "131", label: "Bài kiểm chứng trong các dự án công khai" },
  { value: "03", label: "Nền tảng automation: API, web và mobile" },
  { value: "CPTS", label: "Ứng viên — đang chuẩn bị cho kỳ thi" },
] as const;

export const experience = [
  {
    company: "GTEL OTS",
    period: "Tháng 7/2024 — Hiện tại",
    role: "QA Automation Engineer · Penetration Testing",
    summary: "Đảm bảo chất lượng và an toàn cho các hệ thống doanh nghiệp trên web, API, Android và iOS.",
    contributions: [
      "Thiết kế nền tảng automation có khả năng tái sử dụng và các bộ kiểm thử theo sản phẩm cho API, trình duyệt, Android và iOS.",
      "Cải thiện việc thực thi CI bằng phân phối song song, báo cáo tổng hợp và bằng chứng lỗi có thể hành động.",
      "Thực hiện đánh giá bảo mật web, API và mobile trong phạm vi được ủy quyền, kèm phát hiện có thể tái hiện và kiểm chứng khắc phục.",
      "Tự động hóa các quy trình kiểm tra chuyên biệt cho dữ liệu không gian, GPS, tuyến đường, hiển thị bản đồ và dữ liệu khối lượng lớn.",
    ],
    tags: ["Automation Architecture", "Enterprise QA", "Application Security", "CI/CD"],
    current: true,
  },
  {
    company: "Nexon",
    period: "Tháng 3/2024 — Tháng 5/2024",
    role: "Manual QA Tester",
    summary: "Xây dựng nền tảng thực tiễn về chất lượng sản phẩm thông qua kiểm thử thủ công và trao đổi lỗi rõ ràng.",
    contributions: [
      "Thực hiện kiểm thử chức năng, hồi quy và khám phá dựa trên hành vi sản phẩm cùng yêu cầu nghiệp vụ.",
      "Ghi nhận lỗi có thể tái hiện với các bước rõ ràng, bằng chứng và kết quả mong đợi so với thực tế.",
      "Phối hợp cùng đội ngũ phát triển để xác nhận bản sửa lỗi và củng cố độ tin cậy trước phát hành.",
    ],
    tags: ["Manual Testing", "Regression Testing", "Exploratory Testing", "Defect Reporting"],
    current: false,
  },
] as const;

export const caseStudies = [
  {
    index: "01",
    eyebrow: "Kiến trúc chất lượng",
    title: "Automation tái sử dụng trên ba nền tảng triển khai",
    summary: "Thiết kế nền tảng trung lập về nghiệp vụ cho kiểm thử API, trình duyệt, Android và iOS mà không nhúng quy trình sản phẩm vào framework.",
    contribution: [
      "Thực thi theo cấu hình và kiểm tra tính hợp lệ của môi trường",
      "Chiến lược locator động với chẩn đoán lỗi rõ ràng",
      "Các lượt chạy song song độc lập kèm bằng chứng và báo cáo",
    ],
    tags: ["REST Assured", "Playwright", "Appium", "Java", "CI/CD"],
    tone: "quality",
  },
  {
    index: "02",
    eyebrow: "Kiểm thử bảo mật được ủy quyền",
    title: "Đánh giá hệ thống doanh nghiệp trên web, API và mobile",
    summary: "Lập bản đồ bề mặt tấn công, kiểm thử phân quyền và business logic, xây dựng script kiểm chứng tập trung, đồng thời cung cấp bằng chứng có thể tái hiện cho đội ngũ kỹ thuật.",
    contribution: [
      "Kiểm thử authentication, JWT, SSO, IDOR/BOLA, RBAC và workflow",
      "Phân tích phía client, API, mobile, MQTT và hạ tầng",
      "Báo cáo kỹ thuật gồm tác động, bằng chứng và hướng khắc phục",
    ],
    tags: ["Burp Suite", "OWASP", "Python", "Nmap", "Mobile"],
    tone: "security",
  },
  {
    index: "03",
    eyebrow: "Kỹ thuật chất lượng chuyên biệt",
    title: "Kiểm chứng dữ liệu không gian và khối lượng lớn",
    summary: "Tự động hóa việc kiểm tra tuyến đường, tọa độ, GPS, GeoJSON, hiển thị bản đồ và tập dữ liệu lớn trên API, trình duyệt và quy trình báo cáo.",
    contribution: [
      "Đối chiếu dữ liệu vị trí và tuyến đường giữa nhiều hệ thống",
      "Kiểm chứng hiển thị trình duyệt và network response",
      "Xử lý theo dữ liệu Excel với bằng chứng kết quả có thể truy vết",
    ],
    tags: ["GeoJSON", "JTS", "Playwright", "Apache POI", "Maps"],
    tone: "quality",
  },
] as const;

export const capabilityGroups = [
  {
    number: "01",
    title: "Quality Engineering",
    description: "Hệ thống automation đáng tin cậy, tiếp tục tái sử dụng được khi sản phẩm, môi trường và đội ngũ thay đổi.",
    items: [
      "Kiến trúc automation framework",
      "Kiểm thử API contract và workflow",
      "Browser automation với Playwright",
      "Appium cho Android và iOS",
      "Thiết kế locator động và component",
      "CI song song và chẩn đoán lỗi",
      "Kiểm chứng dữ liệu và dữ liệu không gian",
    ],
    tone: "quality",
  },
  {
    number: "02",
    title: "Offensive Security",
    description: "Kiểm thử bảo mật được ủy quyền, dựa trên bằng chứng và tập trung vào hành vi có thể khai thác cùng hướng khắc phục hữu ích.",
    items: [
      "Kiểm thử xâm nhập web và API",
      "Đánh giá ứng dụng mobile",
      "Authentication và authorization",
      "Kiểm thử lỗ hổng business logic",
      "Liệt kê mạng và phân tích lưu lượng",
      "Phân tích source và phía client",
      "Kiểm chứng và báo cáo phát hiện",
    ],
    tone: "security",
  },
] as const;

export const projects = [
  {
    title: "API Framework",
    category: "Quality Engineering",
    description: "Nền tảng automation REST API tái sử dụng với cấu hình an toàn, request specification, vòng đời authentication, validation và reporting.",
    tags: ["Java", "REST Assured", "TestNG"],
    href: "https://github.com/vocongthanh247/api-framework",
  },
  {
    title: "Playwright Framework",
    category: "Quality Engineering",
    description: "Framework browser automation trung lập về nghiệp vụ với logical locator, component scope, context độc lập và bằng chứng khi thất bại.",
    tags: ["Java", "Playwright", "Cucumber"],
    href: "https://github.com/vocongthanh247/playwright-framework",
  },
  {
    title: "Appium Framework",
    category: "Quality Engineering",
    description: "Kiến trúc kiểm thử mobile đa nền tảng với adapter Android/iOS, selector động, cấu hình thiết bị và kiểm soát vòng đời.",
    tags: ["Java", "Appium", "Android / iOS"],
    href: "https://github.com/vocongthanh247/appium-framework",
  },
  {
    title: "Burp Safe Agent",
    category: "Security Engineering",
    description: "Automation chú trọng an toàn cho quy trình Burp được ủy quyền, với kiểm soát phạm vi, mutation, audit trail và che dữ liệu nhạy cảm.",
    tags: ["Python", "Burp Suite", "MCP"],
    href: "https://github.com/vocongthanh247/burp-safe-agent",
  },
  {
    title: "VulnRadar",
    category: "Security Engineering",
    description: "Quy trình vulnerability intelligence cục bộ, kết hợp tín hiệu NVD, CISA KEV, CVSS và EPSS để ưu tiên xử lý thực tế.",
    tags: ["Python", "SQLite", "CISA KEV"],
    href: "https://github.com/vocongthanh247/vulnradar",
  },
] as const;

export const practiceSignals = [
  { value: "55", title: "Chủ đề ghi chú có cấu trúc", detail: "Trong các learning path thực hành trên TryHackMe" },
  { value: "26", title: "Bài thực hành được ghi chép", detail: "Custom tooling, Juice Shop và privilege escalation" },
  { value: "08", title: "Thử thách HTB", detail: "Các nhóm web, reversing, hardware và satellite" },
  { value: "54", title: "Tài liệu về mạng", detail: "Từ luồng packet và routing đến TLS và tấn công LAN" },
] as const;

export const credentials = [
  {
    type: "Chứng nhận",
    title: "Software Testing",
    issuer: "FPT Software Academy",
    status: "Đã hoàn thành",
    description: "Đào tạo nền tảng về software testing, thiết kế và thực thi kiểm thử, báo cáo lỗi và thực hành đảm bảo chất lượng.",
    tone: "quality",
    href: null,
  },
  {
    type: "Hành trình chứng chỉ",
    title: "HTB CPTS",
    issuer: "Hack The Box Academy",
    status: "Đang thực hiện",
    description: "Chuẩn bị cho kỳ thi Certified Penetration Testing Specialist thông qua chương trình học có cấu trúc, lab, phương pháp luận và công việc đánh giá được ủy quyền.",
    tone: "security",
    href: profile.htb,
  },
] as const;

export const recognition = {
  type: "Ghi nhận nội bộ",
  title: "Nhân viên xuất sắc",
  period: "6 tháng đầu năm 2026",
  issuer: "GTEL OTS",
  description: "Được ghi nhận nội bộ vì những đóng góp nổi bật trong 6 tháng đầu năm 2026.",
} as const;

export const principles = [
  "Để mỗi lỗi tự giải thích được nguyên nhân.",
  "Giữ framework độc lập với mã nguồn sản phẩm.",
  "Dùng automation để mở rộng năng lực phán đoán, không thay thế nó.",
  "Xem phạm vi, bằng chứng và báo cáo là một phần của kiểm thử bảo mật.",
] as const;

export const ui = {
  skipLink: "Chuyển đến nội dung chính",
  navLabel: "Điều hướng chính",
  navigation: [
    { label: "Kinh nghiệm", href: "#experience" },
    { label: "Công việc", href: "#work" },
    { label: "Chứng nhận", href: "#credentials" },
    { label: "Dự án", href: "#projects" },
  ],
  contactCta: "Trao đổi cùng tôi",
  backToTopLabel: "Thanh Vo, trở về đầu trang",
  languageLabel: "Chuyển sang tiếng Anh",
  languageHref: "/",
  languageCode: "EN",
  basedIn: "Sinh sống tại",
  heroTitleBefore: "Kỹ thuật chất lượng,",
  heroTitleBridge: "được kiểm chứng bằng ",
  heroTitleAccent: "tư duy tấn công.",
  heroSummary: "Tôi xây dựng các hệ thống automation đáng tin cậy và thực hiện kiểm thử bảo mật được ủy quyền trên ứng dụng web, API và mobile.",
  selectedWorkCta: "Xem công việc tiêu biểu",
  focusLabel: "Trọng tâm kỹ thuật",
  qualityFocus: "Quality Engineering",
  qualityFocusDetail: "Kiến trúc · Automation · Bằng chứng",
  sharedContext: "chung một ngữ cảnh",
  securityFocus: "Offensive Security",
  securityFocusDetail: "Khám phá · Kiểm chứng · Báo cáo",
  focusNote: "Một tư duy kỹ thuật thống nhất: hiểu hệ thống, kiểm tra các giả định và biến kết quả thành hành động cụ thể.",
  proofLabel: "Thông tin portfolio đã kiểm chứng",
  sections: {
    experience: { eyebrow: "Kinh nghiệm", title: "Từ kiểm thử sản phẩm đến kỹ thuật chất lượng và bảo mật.", description: "Tiến trình nghề nghiệp cô đọng, tập trung vào trách nhiệm, đóng góp kỹ thuật và sự phát triển chuyên môn." },
    work: { eyebrow: "Công việc tiêu biểu", title: "Bằng chứng trước mỹ từ.", description: "Góc nhìn tập trung vào các hệ thống, hoạt động đánh giá và quy trình chuyên biệt thể hiện rõ nhất cách tôi làm việc." },
    capabilities: { eyebrow: "Năng lực", title: "Hai chuyên môn. Một tiêu chuẩn thực tiễn.", description: "Automation kiểm chứng hành vi mong đợi ở quy mô lớn. Penetration testing xem xét điều gì xảy ra khi hệ thống được sử dụng theo những cách ngoài dự kiến." },
    practice: { eyebrow: "Thực hành", title: "Học tập để lại bằng chứng.", description: "Ghi chú có cấu trúc, lab có thể lặp lại, công cụ tự xây dựng và công việc thực tế hỗ trợ hành trình chuẩn bị HTB CPTS." },
    credentials: { eyebrow: "Chứng nhận & ghi nhận", title: "Tiến bộ được củng cố bằng thực hành.", description: "Đào tạo chính quy, hành trình chứng chỉ bảo mật đang tiếp diễn và ghi nhận nghề nghiệp hỗ trợ cho những công việc được trình bày ở trên." },
    projects: { eyebrow: "Mã nguồn mở", title: "Dự án công khai, sẵn sàng để kiểm chứng.", description: "Năm repository tập trung thể hiện thiết kế framework, khả năng kiểm thử, kiểm soát an toàn và tài liệu kỹ thuật." },
    principles: { eyebrow: "Nguyên tắc làm việc", title: "Giá trị công việc cần tạo ra." },
  },
  technologiesLabel: "Công nghệ",
  candidateStatus: "Đang thực hiện",
  candidateLabel: "Hành trình chứng chỉ",
  candidateTitle: "Ứng viên HTB CPTS",
  candidateDescription: "Chuẩn bị cho kỳ thi Certified Penetration Testing Specialist bằng chương trình học có cấu trúc, lab thực hành, phát triển phương pháp luận và công việc đánh giá được ủy quyền.",
  candidateTopics: ["Recon & enumeration", "Khai thác web & API", "Network fundamentals", "Privilege escalation", "Reporting"],
  publicProfileCta: "Xem hồ sơ công khai",
  repositoryCta: "Xem repository",
  repositoryLabelPrefix: "Xem",
  repositoryLabelSuffix: "trên GitHub",
  contactEyebrow: "Liên hệ",
  contactTitle: "Xây dựng chất lượng — hay kiểm tra giới hạn của nó?",
  contactDescription: "Tôi luôn quan tâm đến những trao đổi kỹ thuật thực tế về kiến trúc automation, bảo mật ứng dụng và điểm giao nhau giữa hai lĩnh vực này.",
  conversationCta: "Bắt đầu trao đổi",
  footerFocus: "QA Automation · Penetration Testing",
  backToTop: "Về đầu trang ↑",
} as const;
