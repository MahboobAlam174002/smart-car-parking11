let totalSlots = 10;
let availableSlots = 10;
const slots = [];

const totalSlotsElement = document.getElementById('total-slots');
const availableSlotsElement = document.getElementById('available-slots');
const parkingSlotsElement = document.getElementById('parking-slots');
const bookSlotButton = document.getElementById('book-slot');
const freeSlotButton = document.getElementById('free-slot');

// Initialize slots
function initializeSlots() {
    for (let i = 1; i <= totalSlots; i++) {
        const slotDiv = document.createElement('div');
        slotDiv.classList.add('slot');
        slotDiv.textContent = `Slot ${i}`;
        slotDiv.dataset.slotNumber = i;
        slots.push({ number: i, occupied: false });
        parkingSlotsElement.appendChild(slotDiv);
    }
}

// Update available slot count
function updateSlotDisplay() {
    availableSlotsElement.textContent = availableSlots;
    slots.forEach(slot => {
        const slotDiv = document.querySelector(`[data-slot-number='${slot.number}']`);
        if (slot.occupied) {
            slotDiv.classList.add('occupied');
        } else {
            slotDiv.classList.remove('occupied');
        }
    });
}

// Book a slot
bookSlotButton.addEventListener('click', () => {
    if (availableSlots > 0) {
        const availableSlot = slots.find(slot => !slot.occupied);
        if (availableSlot) {
            availableSlot.occupied = true;
            availableSlots--;
            updateSlotDisplay();
        }
    } else {
        alert("No available slots!");
    }
});

// Free a slot
freeSlotButton.addEventListener('click', () => {
    if (availableSlots < totalSlots) {
        const occupiedSlot = slots.find(slot => slot.occupied);
        if (occupiedSlot) {
            occupiedSlot.occupied = false;
            availableSlots++;
            updateSlotDisplay();
        }
    } else {
        alert("All slots are already free!");
    }
});

// Initialize the page
initializeSlots();
updateSlotDisplay();
