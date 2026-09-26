const lectureData = [
  { title: 'Advanced Organic Synthesis', venue: 'Block A - 201', time: '09:00 AM' },
  { title: 'Spectroscopy & Analysis', venue: 'Research Hall - 4', time: '11:30 AM' },
  { title: 'Catalysis & Kinetics', venue: 'Chemical Dynamics Lab', time: '02:00 PM' }
];

const practicalData = [
  { title: 'Qualitative Analysis Lab', lab: 'Lab 09', time: '10:00 AM - 12:00 PM' },
  { title: 'Titration Mastery', lab: 'Lab 05', time: '01:00 PM - 03:00 PM' },
  { title: 'Chromatography Practice', lab: 'Lab 11', time: '03:30 PM - 05:00 PM' }
];

const noticeData = [
  'International Seminar on Green Chemistry is scheduled for Friday in the Grand Hall.',
  'Safety briefing for all chemistry lab batches begins at 8:30 AM tomorrow.',
  'Research mentors have confirmed extra mentoring hours for final-year students.'
];

const discussionData = [
  'Aarav Sharma: How does the rate law change in a zero-order reaction when the catalyst is altered?',
  'Sana Verma: Can we compare the practical output of column chromatography with TLC calibration methods?',
  'Ritika Iyer: Which enzyme kinetics model gives the most practical insight for lab reports?'
];

const state = {
  role: 'student',
  lectures: [...lectureData],
  practicals: [...practicalData],
  notices: [...noticeData],
  discussions: [...discussionData]
};

const lectureList = document.getElementById('lectureList');
const practicalList = document.getElementById('practicalList');
const noticeList = document.getElementById('noticeList');
const discussionList = document.getElementById('discussionList');
const studentButton = document.querySelector('[data-role="student"]');
const teacherButton = document.querySelector('[data-role="teacher"]');
const adminButton = document.querySelector('[data-role="admin"]');

function renderListings() {
  lectureList.innerHTML = state.lectures
    .map(
      (item, index) => `
        <div class="item">
          <div>
            <strong>${item.title}</strong>
            <small>${item.venue} • ${item.time}</small>
          </div>
          <div class="actions">
            <button class="btn warn" onclick="removeLecture(${index})">Remove</button>
          </div>
        </div>
      `
    )
    .join('');

  practicalList.innerHTML = state.practicals
    .map(
      (item, index) => `
        <div class="item">
          <div>
            <strong>${item.title}</strong>
            <small>${item.lab} • ${item.time}</small>
          </div>
          <div class="actions">
            <button class="btn warn" onclick="removePractical(${index})">Remove</button>
          </div>
        </div>
      `
    )
    .join('');

  noticeList.innerHTML = state.notices
    .map(
      (item, index) => `
        <div class="item">
          <div>
            <strong>Department Notice</strong>
            <small>${item}</small>
          </div>
          <div class="actions">
            <button class="btn danger" onclick="removeNotice(${index})">Delete</button>
          </div>
        </div>
      `
    )
    .join('');

  discussionList.innerHTML = state.discussions
    .map((item) => `<div class="discussion">${item}</div>`)
    .join('');
}

function removeLecture(index) {
  state.lectures.splice(index, 1);
  renderListings();
}

function removePractical(index) {
  state.practicals.splice(index, 1);
  renderListings();
}

function removeNotice(index) {
  state.notices.splice(index, 1);
  renderListings();
}

document.getElementById('addLecture').addEventListener('click', () => {
  const title = document.getElementById('lectureTitle').value.trim();
  const venue = document.getElementById('lectureVenue').value.trim();
  const time = document.getElementById('lectureTime').value.trim();
  if (title && venue && time) {
    state.lectures.push({ title, venue, time });
    renderListings();
    document.getElementById('lectureTitle').value = '';
    document.getElementById('lectureVenue').value = '';
    document.getElementById('lectureTime').value = '';
  }
});

document.getElementById('addPractical').addEventListener('click', () => {
  const title = document.getElementById('practicalTitle').value.trim();
  const lab = document.getElementById('practicalLab').value.trim();
  const time = document.getElementById('practicalTime').value.trim();
  if (title && lab && time) {
    state.practicals.push({ title, lab, time });
    renderListings();
    document.getElementById('practicalTitle').value = '';
    document.getElementById('practicalLab').value = '';
    document.getElementById('practicalTime').value = '';
  }
});

document.getElementById('addNotice').addEventListener('click', () => {
  const notice = document.getElementById('noticeInput').value.trim();
  if (notice) {
    state.notices.unshift(notice);
    renderListings();
    document.getElementById('noticeInput').value = '';
  }
});

document.getElementById('addQuestion').addEventListener('click', () => {
  const name = document.getElementById('studentName').value.trim();
  const question = document.getElementById('studentQuestion').value.trim();
  if (name && question) { 
    state.discussions.unshift(`${name}: ${question}`);
    renderListings();
    document.getElementById('studentName').value = '';
    document.getElementById('studentQuestion').value = '';
  }
});

const overlay = document.getElementById('loginOverlay');
const openLoginButtons = [
  document.getElementById('openLogin'),
  document.getElementById('openLogin2')
];

openLoginButtons.forEach((button) => {
  button.addEventListener('click', () => overlay.classList.add('active'));
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) overlay.classList.remove('active');
});

function setRole(role) {
  state.role = role;
  const forms = {
    student: document.getElementById('studentForm'),
    teacher: document.getElementById('teacherForm'),
    admin: document.getElementById('adminForm')
  };

  Object.entries(forms).forEach(([key, el]) => el.classList.toggle('hidden', key !== role));
  [studentButton, teacherButton, adminButton].forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.role === role);
  });
}

studentButton.addEventListener('click', () => setRole('student'));
teacherButton.addEventListener('click', () => setRole('teacher'));
adminButton.addEventListener('click', () => setRole('admin'));

document.getElementById('loginStudent').addEventListener('click', () => {
  overlay.classList.remove('active');
  alert('Student dashboard unlocked. You can view schedules and ask questions.');
});

document.getElementById('loginTeacher').addEventListener('click', () => {
  overlay.classList.remove('active');
  alert('Teacher panel unlocked. You can add lectures, practicals, and department notices.');
});

document.getElementById('loginAdmin').addEventListener('click', () => {
  overlay.classList.remove('active');
  alert('Director control enabled. All departmental content can be managed.');
});

function randomizeMetrics() {
  const studentCount = 1260 + Math.floor(Math.random() * 180);
  const teacherCount = 88 + Math.floor(Math.random() * 12);
  const labCount = 16 + Math.floor(Math.random() * 4);
  const pubCount = 230 + Math.floor(Math.random() * 40);

  document.getElementById('studentCount').textContent = studentCount;
  document.getElementById('teacherCount').textContent = teacherCount;
  document.getElementById('labCount').textContent = labCount;
  document.getElementById('pubCount').textContent = pubCount;
}

randomizeMetrics();
renderListings();
