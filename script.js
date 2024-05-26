const paragraphInput = document.getElementById('paragraph');
const generateBtn = document.getElementById('generate-btn');
const resultDiv = document.getElementById('result');

generateBtn.addEventListener('click', () => {
  const paragraph = paragraphInput.value.trim();

  if (!paragraph) {
    alert('Please enter a paragraph.');
    return;
  }

  // Simulate backend call (replace with actual backend logic)
  const question = "This is a placeholder question generated from the paragraph.";
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  resultDiv.innerHTML = ''; // Clear previous results

  const questionElem = document.createElement('h2');
  questionElem.classList.add('text-xl', 'font-bold');
  questionElem.textContent = question;

  const optionsList = document.createElement('ul');
  optionsList.classList.add('list-disc', 'pl-4');

  options.forEach(option => {
    const optionItem = document.createElement('li');
    optionItem.textContent = option;
    optionsList.appendChild(optionItem);
  });

  resultDiv.appendChild(questionElem);
  resultDiv.appendChild(optionsList);
});
