import React, { useState } from 'react';
import { Form, Radio, Button, Row, Col, Image } from 'antd';
import './Quiz.css';

const Quiz = () => {
	const [form] = Form.useForm();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [questions] = useState([
		{
			question: 'Which of the following fruits is red?',
			options: [
				{
					label: (
						<Image
							src='http://localhost:3000/media/logo.png'
							className='image-option'
						/>
					),
					value: 'Apple',
				},
				{
					label: (
						<Image
							src='http://localhost:3000/media/logo.png'
							className='image-option'
						/>
					),
					value: 'Banana',
				},
				{
					label: (
						<Image
							src='http://localhost:3000/media/logo.png'
							className='image-option'
						/>
					),
					value: 'Strawberry',
				},
				{
					label: (
						<Image
							src='http://localhost:3000/media/logo.png'
							className='image-option'
						/>
					),
					value: 'Orange',
				},
			],
			correctAnswer: 'Strawberry',
		},
		{
			question: 'Which of the following animals is a mammal?',
			options: [
				{
					label: (
						<Image
							src='http://localhost:3000/media/logo.png'
							className='image-option'
						/>
					),
					value: 'Fish',
				},
				{
					label: (
						<Image
							src='http://localhost:3000/media/logo.png'
							className='image-option'
						/>
					),
					value: 'Bird',
				},
				{
					label: (
						<Image
							src='http://localhost:3000/media/logo.png'
							className='image-option'
						/>
					),
					value: 'Lizard',
				},
				{
					label: (
						<Image
							src='http://localhost:3000/media/logo.png'
							className='image-option'>
							<h2>Cat</h2>
						</Image>
					),
					value: 'Cat',
				},
			],
			correctAnswer: 'Cat',
		},
		// add more questions as needed
	]);

	const handleSubmit = (values) => {
		if (values.answer === questions[currentQuestion].correctAnswer) {
			setScore(score + 1);
		}
		setCurrentQuestion(currentQuestion + 1);
	};

	const nextQuestion = () => {
		form.validateFields().then((values) => {
			handleSubmit(values);
		});
	};

	const renderQuestion = () => {
		return (
			<Form form={form}>
				<h2>{questions[currentQuestion].question}</h2>
				<Form.Item name='answer'>
					<Radio.Group>
						<Row gutter={16}>
							{questions[currentQuestion].options.map((option) => (
								<Col
									span={24}
									onClick={() => {
										form.setFieldsValue({ answer: option.value });
										nextQuestion();
									}}
									key={option.value}>
									{option.label}
								</Col>
							))}
						</Row>
					</Radio.Group>
				</Form.Item>
			</Form>
		);
	};

	const renderResults = () => {
		return (
			<div>
				<h2>Quiz Results</h2>
				<p>
					You scored {score} out of {questions.length}
				</p>
			</div>
		);
	};

	return (
		<div>
			{currentQuestion < questions.length ? renderQuestion() : renderResults()}
		</div>
	);
};

export default Quiz;
