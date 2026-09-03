import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const [workingOption, setWorkingOption] = useState('');
  const [editOption, setEditOption] = useState('');
  const { dispatch, state } = useContext(SurveyContext);

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // TODO: Students will add edit functionality here
  const handleEdit = () => {
    // Hint: Use SET_EDITING_QUESTION action
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: question.id,
    });
  };

  // TODO: Students will add save functionality here
  const handleSave = () => {
    console.log('TODO: Implement save functionality');
    // Hint: Use UPDATE_QUESTION_TEXT action with workingText
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: {
        id: question.id,
        text: workingText,
      },
    });
  };

  // TODO: Students will add delete functionality here
  const handleDelete = () => {
    console.log('TODO: Implement delete functionality');
    console.log(question.id);
    // Hint: Show confirmation dialog, then use DELETE_QUESTION action
    dispatch({
      type: 'DELETE_QUESTION',
      payload: question.id,
    });
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          {question.id === state.ui.editingQuestionId ? (
            <button className={styles['save-btn']} onClick={handleSave}>
              Save (TODO)
            </button>
          ) : (
            <button className={styles['edit-btn']} onClick={handleEdit}>
              Edit (TODO)
            </button>
          )}

          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete (TODO)
          </button>
        </div>
      </div>

      {/* TODO: Students will add conditional controlled form to edit question here */}
      <div className={styles['question-content']}>
        <h3>
          {question.id === state.ui.editingQuestionId ? (
            <textarea
              id="edit-input"
              value={workingText}
              onChange={(e) => setWorkingText(e.target.value)}
              placeholder={'Enter your question here...'}
              className={styles['question-input']}
            />
          ) : (
            question.question
          )}
        </h3>
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          {question.id === state.ui.editingQuestionId && (
            <>
              <button
                className={styles['edit-btn']}
                onClick={() =>
                  dispatch({
                    type: 'ADD_OPTION_TO_QUESTION',
                    payload: {
                      id: question.id,
                      optionText: workingOption,
                    },
                  })
                }
              >
                Add Option (TODO)
              </button>
              <textarea
                id="add-option"
                value={workingOption}
                onChange={(e) => setWorkingOption(e.target.value)}
                placeholder={'Enter your new option here...'}
                className={styles['question-input']}
              />
            </>
          )}
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                <span className={styles['option-text']}>{option}</span>
                {question.id === state.ui.editingQuestionId && (
                  <>
                    <button
                      className={styles['edit-btn']}
                      onClick={() =>
                        dispatch({
                          type: 'UPDATE_OPTION_TEXT',
                          payload: {
                            optionIndex: index,
                            optionId: question.id,
                            optionText: editOption,
                          },
                        })
                      }
                    >
                      Edit Option (TODO)
                    </button>
                    <textarea
                      id="add-option"
                      value={editOption}
                      onChange={(e) => setEditOption(e.target.value)}
                      placeholder={'Enter your new option here...'}
                      className={styles['question-input']}
                    />
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
