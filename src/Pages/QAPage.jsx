import React, { useContext, useEffect, useState } from 'react';
import QuestionForm from '../Component/QAPage/QuestionForm';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';


const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answerText, setAnswerText] = useState('');
  const [openAnswerIds, setOpenAnswerIds] = useState([]);
  const { user } = useContext(AuthContext);
  const displayName = user?.displayName || 'Anonymous';

  // Fetch questions
  const fetchQuestions = async () => {
    try {
      const res = await fetch('http://localhost:3000/questions');
      const data = await res.json();
      setQuestions(data);
    } catch (error) {
      toast.error('Failed to load questions.');
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // Handle new question
  const handleNewQuestion = async () => {
    try {
      toast.success('Question submitted successfully!');
      await fetchQuestions(); // re-fetch to update UI
    } catch {
      toast.error('Failed to reload questions.');
    }
  };

  // Submit answer
  const handleAnswerSubmit = async () => {
    if (!answerText.trim()) {
      toast.warning('Please write an answer before submitting.');
      return;
    }

    const answer = {
      text: answerText,
      author: displayName,
      createdAt: new Date()
    };

    try {
      const res = await fetch(`http://localhost:3000/questions/${selectedQuestion._id}/answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answer)
      });

      if (!res.ok) throw new Error();

      // Optimistically update UI
      setQuestions(prev =>
        prev.map(q =>
          q._id === selectedQuestion._id
            ? { ...q, answers: [...q.answers, answer] }
            : q
        )
      );

      toast.success('Answer submitted successfully!');
      setAnswerText('');
      document.getElementById('answer_modal').close();
    } catch {
      toast.error('Failed to submit answer.');
    }
  };

  const toggleAnswers = (id) => {
    setOpenAnswerIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-base-100 min-h-screen py-10">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-10">🌿 Community Q&A</h1>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Questions List */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-green-700">Recent Questions</h2>
            <div className="space-y-6">
              {questions.map(q => (
                <div key={q._id} className="border-b pb-4">
                  <h3 className="font-bold text-black">{q.question}</h3>
                  <p className="text-sm text-gray-500 italic">{q.description}</p>
                  <p className="text-sm text-gray-500 italic">Posted on: {new Date(q.createdAt).toLocaleString()}</p>
                  <div className="flex items-center justify-between mt-2 gap-2">
                    <p className="text-xs text-gray-400">Answers: {q.answers?.length || 0}</p>
                    <div className="flex gap-2">
                      <button
                        className="btn btn-xs btn-outline btn-success"
                        onClick={() => {
                          setSelectedQuestion(q);
                          document.getElementById('answer_modal').showModal();
                        }}
                      >
                        Answer
                      </button>
                      <button
                        className="btn btn-xs btn-outline bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black"
                        onClick={() => toggleAnswers(q._id)}
                      >
                        {openAnswerIds.includes(q._id) ? 'Hide Answers' : 'View Answers'}
                      </button>
                    </div>
                  </div>
                  {/* Answer List */}
                  {openAnswerIds.includes(q._id) && (
                    <div className="mt-3 space-y-2 text-sm text-gray-700">
                      {q.answers.length ? (
                        q.answers.map((a, i) => (
                          <div key={i} className="bg-base-200 p-2 rounded-md">
                            <p className="italic text-gray-500">"{a.text}"</p>
                            <p className="text-xs text-gray-400 mt-1">— {a.author}</p>
                          </div>
                        ))
                      ) : (
                        <p className="italic text-gray-500">No answers yet.</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Ask Question Form */}
          <div>
            <QuestionForm onNewQuestion={handleNewQuestion} />
          </div>
          
        </div>
      </div>

      {/* Modal */}
      <dialog id="answer_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Answer: {selectedQuestion?.question}</h3>
          <textarea
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
            className="textarea textarea-bordered w-full mt-3"
            placeholder="Your answer..."
            rows="4"
          />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
            <button onClick={handleAnswerSubmit} className="btn btn-success text-white">
              Submit
            </button>
          </div>
        </div>
      </dialog>

    </div>
  );
};

export default QuestionList;
