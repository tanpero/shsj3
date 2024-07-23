const members = document.querySelectorAll('.member');

members.forEach(member => {
  member.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
    this.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
  });

  member.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  });
});