// Global variables
let currentUser = null;
let foundItems = [];
let lostItems = [];
let returnedItems = [];

// Student enrollment database
const studentDatabase = [
    {enrollment: '231130146001', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146002', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146003', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146004', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146005', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146006', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146007', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146008', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146009', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146010', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146011', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146012', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146013', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146014', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146015', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146016', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146017', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146018', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146019', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146020', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146021', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146022', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146023', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146024', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146025', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146026', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146027', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '231130146028', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146001', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146002', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146003', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146004', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146005', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146006', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146007', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146008', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146009', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146010', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146011', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146012', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146013', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146014', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146015', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146016', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146017', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146018', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146019', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146020', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146021', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146022', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146023', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146024', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146025', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146026', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146027', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'},
    {enrollment: '241133146028', college: 'Sal College of Engineering', branch: 'CSE', sem: '5'}
];

// Initialize the application
function init() {
    // Set today's date as default for date inputs
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => input.value = today);
}

// Enrollment verification
function verifyEnrollment(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const enrollmentId = formData.get('enrollmentId');
    const studentName = formData.get('studentName');

    // Check if enrollment exists in database
    const studentRecord = studentDatabase.find(student => student.enrollment === enrollmentId);
    
    if (studentRecord) {
        // Auto-fill the details
        document.getElementById('branch').value = studentRecord.branch;
        document.getElementById('college').value = studentRecord.college;
        document.getElementById('semester').value = studentRecord.sem;
        
        // Hide verify button and show confirmation buttons
        document.getElementById('verifyBtn').classList.add('hidden');
        document.getElementById('verificationButtons').classList.remove('hidden');
        
        // Store temporary data
        window.tempUserData = {
            enrollmentId,
            name: studentName,
            branch: studentRecord.branch,
            college: studentRecord.college,
            semester: studentRecord.sem
        };
    } else {
        alert('Enrollment ID not found. Please contact the administrator.');
    }
}

function confirmDetails(isCorrect) {
    if (isCorrect) {
        currentUser = window.tempUserData;
        
        // Show success animation
        const confirmBtn = event.target;
        confirmBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Verified!';
        confirmBtn.classList.add('success-animation');

        setTimeout(() => {
            document.getElementById('enrollment-page').classList.add('hidden');
            document.getElementById('navbar').classList.remove('hidden');
            showPage('home');
            updateProfile();
            updateStatistics();
        }, 1000);
    } else {
        // Show contact information
        alert('Please contact:\nHOD: hod.cse@salcollege.edu\nCoordinator: coordinator.cse@salcollege.edu\nPhone: +91-XXXXXXXXXX');
    }
}

// Navigation functions
function showPage(pageId) {
    // Hide all pages
    const pages = ['home-page', 'report-found-page', 'report-lost-page', 'search-page', 'profile-page'];
    pages.forEach(page => {
        document.getElementById(page).classList.add('hidden');
    });

    // Show selected page
    document.getElementById(pageId + '-page').classList.remove('hidden');
    
    // Close profile menu if open
    document.getElementById('profileMenu').classList.add('hidden');

    // Load page-specific content
    if (pageId === 'home') {
        updateStatistics();
    } else if (pageId === 'search') {
        searchItems();
    } else if (pageId === 'profile') {
        loadUserItems();
    }
}

function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    menu.classList.toggle('hidden');
}

function updateProfile() {
    if (currentUser) {
        document.getElementById('profileName').textContent = currentUser.name;
        document.getElementById('profileEnrollment').textContent = `Enrollment ID: ${currentUser.enrollmentId}`;
        document.getElementById('profileDepartment').textContent = `Branch: ${currentUser.branch} | Semester: ${currentUser.semester}`;
        loadUserItems();
    }
}

function updateStatistics() {
    const totalSubmissions = foundItems.length + lostItems.length;
    document.getElementById('totalSubmissions').textContent = totalSubmissions;
    document.getElementById('totalFound').textContent = foundItems.length;
    document.getElementById('totalLost').textContent = lostItems.length;
    document.getElementById('totalReturned').textContent = returnedItems.length;
}

function loadUserItems() {
if (!currentUser) return;

const userFoundItems = foundItems.filter(item => item.reporterId === currentUser.enrollmentId);
const userLostItems = lostItems.filter(item => item.reporterId === currentUser.enrollmentId);
const allUserItems = [...userFoundItems, ...userLostItems];

const container = document.getElementById('userItems');

if (allUserItems.length === 0) {
container.innerHTML = `
    <div class="text-center py-8">
        <i class="fas fa-inbox text-4xl text-gray-400 mb-4"></i>
        <p class="text-gray-600">You haven't reported any items yet.</p>
    </div>
`;
} else {
container.innerHTML = allUserItems.map(item => `
    <div class="bg-gray-50 rounded-lg p-4 border">
        <div class="flex items-center justify-between mb-2">
            <span class="px-3 py-1 rounded-full text-sm font-medium ${
                item.type === 'found' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
            }">
                ${item.type === 'found' ? 'Found' : 'Lost'}
            </span>
            <div class="flex space-x-2">
                <button onclick="markAsReturned('${item.id}', '${item.type}')" 
                        class="text-green-600 hover:text-green-800 transition-colors" 
                        title="${item.type === 'lost' ? 'Mark as Found' : 'Mark as Returned'}">
                    <i class="fas fa-check-circle"></i>
                </button>
                <button onclick="deleteItem('${item.id}', '${item.type}')" 
                        class="text-red-600 hover:text-red-800 transition-colors" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        ${item.image ? `
            <img src="${item.image}" alt="${item.name}" class="w-full max-h-48 object-cover rounded-lg mb-3">
        ` : ''}
        <h4 class="font-semibold text-gray-800">${item.name}</h4>
        <p class="text-sm text-gray-600 mb-2">${item.description}</p>
        <div class="text-xs text-gray-500">
            <span><i class="fas fa-map-marker-alt mr-1"></i>${item.location}</span>
            <span class="ml-4"><i class="fas fa-calendar mr-1"></i>${new Date(item.date).toLocaleDateString()}</span>
        </div>
    </div>
`).join('');
}

// Load history items
loadHistoryItems();
}



function markAsReturned(itemId, itemType) {
// Different messages for lost vs found items
const confirmMessage = itemType === 'lost' 
? '🎉 Are you sure you found your item?' 
: '🎉 Hurray! You helped someone find their item! Mark as returned?';

const successMessage = itemType === 'lost'
? '🎉 Good to see you found your lost item!'
: '🎉 Amazing! You made someone\'s day by helping them find their item!';

if (confirm(confirmMessage)) {
let item;
if (itemType === 'found') {
    item = foundItems.find(i => i.id == itemId);
    foundItems = foundItems.filter(i => i.id != itemId);
} else {
    item = lostItems.find(i => i.id == itemId);
    lostItems = lostItems.filter(i => i.id != itemId);
}

if (item) {
    item.returnedDate = new Date();
    returnedItems.push(item);
}

loadUserItems();
updateStatistics();
showSuccessModal(successMessage);
}
}



function deleteItem(itemId, itemType) {
    if (confirm('Are you sure you want to delete this item? This action cannot be undone.')) {
        if (itemType === 'found') {
            foundItems = foundItems.filter(item => item.id != itemId);
        } else {
            lostItems = lostItems.filter(item => item.id != itemId);
        }
        loadUserItems();
        updateStatistics();
        showSuccessModal('Item deleted successfully!');
    }
}

function submitFoundItem(event) {
event.preventDefault();

const formData = new FormData(event.target);
const photoFile = formData.get('itemPhoto');

const item = {
id: Date.now(),
type: 'found',
category: formData.get('category'),
name: formData.get('itemName'),
description: formData.get('description'),
location: formData.get('location'),
date: formData.get('dateFound'),
contact: formData.get('contactInfo'),
reporter: currentUser.name,
reporterId: currentUser.enrollmentId,
timestamp: new Date(),
image: null
};

// Handle image upload
if (photoFile && photoFile.size > 0) {
const reader = new FileReader();
reader.onload = function(e) {
    item.image = e.target.result;
    foundItems.push(item);
    updateStatistics();
    showSuccessModal('Found item reported successfully! Others can now see it when searching.');
    event.target.reset();
    document.getElementById('foundPreview').classList.add('hidden');
};
reader.readAsDataURL(photoFile);
} else {
foundItems.push(item);
updateStatistics();
showSuccessModal('Found item reported successfully! Others can now see it when searching.');
event.target.reset();
}
}


function submitLostItem(event) {
event.preventDefault();

const formData = new FormData(event.target);
const photoFile = formData.get('itemPhoto');

const item = {
id: Date.now(),
type: 'lost',
category: formData.get('category'),
name: formData.get('itemName'),
description: formData.get('description'),
location: formData.get('location'),
date: formData.get('dateLost'),
contact: formData.get('contactInfo'),
reporter: currentUser.name,
reporterId: currentUser.enrollmentId,
timestamp: new Date(),
image: null
};

// Handle image upload
if (photoFile && photoFile.size > 0) {
const reader = new FileReader();
reader.onload = function(e) {
    item.image = e.target.result;
    lostItems.push(item);
    updateStatistics();
    showSuccessModal('Lost item reported successfully! You\'ll be notified if someone finds it.');
    event.target.reset();
    document.getElementById('lostPreview').classList.add('hidden');
};
reader.readAsDataURL(photoFile);
} else {
lostItems.push(item);
updateStatistics();
showSuccessModal('Lost item reported successfully! You\'ll be notified if someone finds it.');
event.target.reset();
}
}


// Search functionality
function searchItems() {
    const query = document.getElementById('searchQuery')?.value.toLowerCase() || '';
    const category = document.getElementById('searchCategory')?.value || '';
    const type = document.getElementById('searchType')?.value || '';

    let allItems = [...foundItems, ...lostItems];

    // Filter items
    if (query) {
        allItems = allItems.filter(item => 
            item.name.toLowerCase().includes(query) || 
            item.description.toLowerCase().includes(query)
        );
    }

    if (category) {
        allItems = allItems.filter(item => item.category === category);
    }

    if (type) {
        allItems = allItems.filter(item => item.type === type);
    }

    displaySearchResults(allItems, query);
}

function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
}

function displaySearchResults(items, query = '') {
const resultsContainer = document.getElementById('searchResults');

if (items.length === 0) {
resultsContainer.innerHTML = `
    <div class="col-span-full text-center py-12">
        <i class="fas fa-search text-4xl text-gray-400 mb-4"></i>
        <p class="text-gray-600">No items found matching your search criteria.</p>
    </div>
`;
return;
}

resultsContainer.innerHTML = items.map(item => `
<div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
    <div class="flex items-center justify-between mb-4">
        <span class="px-3 py-1 rounded-full text-sm font-medium ${
            item.type === 'found' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
        }">
            ${item.type === 'found' ? 'Found' : 'Lost'}
        </span>
        <span class="text-sm text-gray-500">${item.category}</span>
    </div>
    
    ${item.image ? `
        <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover rounded-lg mb-4">
    ` : ''}
    
    <h3 class="text-lg font-bold text-gray-800 mb-2">${highlightText(item.name, query)}</h3>
    <p class="text-gray-600 mb-4">${highlightText(item.description, query)}</p>
    
    <div class="space-y-2 text-sm text-gray-500">
        <div><i class="fas fa-map-marker-alt mr-2"></i>${item.location}</div>
        <div><i class="fas fa-calendar mr-2"></i>${new Date(item.date).toLocaleDateString()}</div>
        <div><i class="fas fa-user mr-2"></i>Reported by ${item.reporter}</div>
    </div>
    
    <button onclick="contactReporter('${item.contact}')" 
            class="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        <i class="fas fa-envelope mr-2"></i>Contact Reporter
    </button>
</div>
`).join('');
}




function contactReporter(contact) {
    alert(`Contact the reporter at: ${contact}`);
}

// Modal functions
function showSuccessModal(message) {
    document.getElementById('successMessage').textContent = message;
    document.getElementById('successModal').classList.remove('hidden');
    document.getElementById('successModal').classList.add('flex');
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.add('hidden');
    document.getElementById('successModal').classList.remove('flex');
}
// NEW: Image preview function
function previewImage(event, previewId) {
const file = event.target.files[0];
const previewDiv = document.getElementById(previewId);
const img = previewDiv.querySelector('img');

if (file) {
const reader = new FileReader();
reader.onload = function(e) {
    img.src = e.target.result;
    previewDiv.classList.remove('hidden');
};
reader.readAsDataURL(file);
} else {
previewDiv.classList.add('hidden');
}
}

// NEW: Toggle history section
function toggleHistory() {
const historySection = document.getElementById('historyItems');
const toggleIcon = document.getElementById('historyToggleIcon');

historySection.classList.toggle('hidden');
toggleIcon.classList.toggle('rotate-180');
}

// NEW: Load history items
function loadHistoryItems() {
if (!currentUser) return;

const userReturnedItems = returnedItems.filter(item => item.reporterId === currentUser.enrollmentId);
const container = document.getElementById('historyItems');

if (userReturnedItems.length === 0) {
container.innerHTML = `
    <div class="text-center py-8">
        <i class="fas fa-archive text-4xl text-gray-300 mb-4"></i>
        <p class="text-gray-500">No returned items yet.</p>
    </div>
`;
return;
}

container.innerHTML = userReturnedItems.map(item => `
<div class="bg-gray-100 rounded-lg p-4 border border-gray-300 opacity-75">
    <div class="flex items-center justify-between mb-2">
        <span class="px-3 py-1 rounded-full text-sm font-medium ${
            item.type === 'found' 
                ? 'bg-green-200 text-green-900' 
                : 'bg-red-200 text-red-900'
        }">
            ${item.type === 'found' ? 'Found - Returned ✓' : 'Lost - Found ✓'}
        </span>
        <span class="text-xs text-gray-500">
            <i class="fas fa-check-circle mr-1"></i>
            ${new Date(item.returnedDate).toLocaleDateString()}
        </span>
    </div>
    ${item.image ? `
        <img src="${item.image}" alt="${item.name}" class="w-full max-h-48 object-cover rounded-lg mb-3">
    ` : ''}
    <h4 class="font-semibold text-gray-800">${item.name}</h4>
    <p class="text-sm text-gray-600 mb-2">${item.description}</p>
    <div class="text-xs text-gray-500">
        <span><i class="fas fa-map-marker-alt mr-1"></i>${item.location}</span>
        <span class="ml-4"><i class="fas fa-calendar mr-1"></i>${new Date(item.date).toLocaleDateString()}</span>
    </div>
</div>
`).join('');
}



function logout() {
    currentUser = null;
    foundItems = [];
    lostItems = [];
    document.getElementById('navbar').classList.add('hidden');
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('enrollment-page').classList.remove('hidden');
    document.getElementById('enrollmentForm').reset();
}

// Close profile menu when clicking outside
document.addEventListener('click', function(event) {
    const profileMenu = document.getElementById('profileMenu');
    const profileButton = event.target.closest('button[onclick="toggleProfileMenu()"]');
    
    if (!profileButton && !profileMenu.contains(event.target)) {
        profileMenu.classList.add('hidden');
    }
});

// Initialize the application
init();