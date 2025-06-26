import React, { useState } from 'react';

const QuestionForm = ({ onNewQuestion }) => {
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const newQ = {
      question,
      description,
      author: 'Guest',
      answers: [],
      createdAt: new Date(),
    };

    const res = await fetch('http://localhost:3000/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newQ)
    });

    const result = await res.json();
    onNewQuestion(result); // ✅ update parent state immediately
    setQuestion('');
    setDescription('');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center text-green-700">Ask a Question</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-center">
        <input
          type="text"
          placeholder="Your Question"
          className="input input-bordered w-full"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          required
        />
        <textarea
          rows="4"
          placeholder="Add some details (optional)"
          className="textarea textarea-bordered w-full"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn bg-green-600 text-white rounded-full text-center hover:bg-green-700 px-6">Submit</button>
      </form>
    </div>
  );
};

export default QuestionForm;
