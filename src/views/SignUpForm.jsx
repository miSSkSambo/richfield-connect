import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePreview from '../components/ProfilePreview';
import { useAppContext } from '../context/AppContext';

const campuses = [
  'Cape Town',
  'Durban',
  'Johannesburg',
  'Pretoria',
  'Online / Multi-campus'
];

const interestOptions = [
  'Programming',
  'Design',
  'Data Science',
  'Networking',
  'Cybersecurity',
  'Entrepreneurship'
];

const emptyForm = {
  fullName: '',
  studentNumber: '',
  campus: '',
  email: '',
  password: '',
  confirmPassword: '',
  interests: [],
  bio: '',
  terms: false
};

// FIXED VALIDATION FUNCTION
function validateField(name, value, form) {
  switch (name) {
    case 'fullName':
      return value.trim()
        ? ''
        : 'Please enter your full name.';

    case 'studentNumber':
      return /^\d{6,}$/.test(value)
        ? ''
        : 'Use at least 6 numeric digits.';

    case 'campus':
      return value
        ? ''
        : 'Please select a campus.';

    case 'email':
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
        ? ''
        : 'Enter a valid email address.';

    case 'password':
      return value.length >= 8
        ? ''
        : 'Password must be at least 8 characters.';

    case 'confirmPassword':
      return value && value === form.password
        ? ''
        : 'Passwords must match.';

    case 'interests':
      return value.length > 0
        ? ''
        : 'Select at least one interest.';

    case 'bio':
      return value.trim().length >= 20
        ? ''
        : 'Your bio must be at least 20 characters.';

    case 'terms':
      return value
        ? ''
        : 'You must accept the terms and conditions.';

    default:
      return '';
  }
}

export default function SignUpForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const updateField = (name, value) => {
    const updated = {
      ...form,
      [name]: value
    };

    setForm(updated);

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: validateField(name, value, updated)
      }));
    }
  };

  const toggleInterest = (interest) => {
    const updatedInterests = form.interests.includes(interest)
      ? form.interests.filter((item) => item !== interest)
      : [...form.interests, interest];

    updateField('interests', updatedInterests);
  };

  const blurField = (name) => {
    setErrors((current) => ({
      ...current,
      [name]: validateField(name, form[name], form)
    }));
  };

  const validateAll = () => {
    const next = Object.fromEntries(
      Object.keys(emptyForm).map((key) => [
        key,
        validateField(key, form[key], form)
      ])
    );

    setErrors(next);

    return Object.values(next).every((error) => !error);
  };

  const submit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    if (!validateAll()) {
      return;
    }

    const {
      password,
      confirmPassword,
      terms,
      ...safeProfile
    } = form;

    const profile = {
      ...safeProfile,
      registeredAt: new Date().toISOString()
    };

    dispatch({
      type: 'REGISTER_USER',
      payload: profile
    });

    navigate('/profile');
  };

  const fieldError = (name) => {
    return submitted || errors[name]
      ? errors[name]
      : '';
  };

  return (
    <div className="container page-enter">

      <section className="inner-hero signup-hero">
        <div className="eyebrow">
          JOIN THE COMMUNITY
        </div>

        <h1>
          Create your academic
          <br />
          <span>profile.</span>
        </h1>

        <p>
          Tell the community what you are curious about,
          what you are learning and where you are headed.
        </p>
      </section>

      <div className="signup-layout">

        <form
          className="signup-form content-card"
          onSubmit={submit}
          noValidate
        >

          <div className="form-heading">
            <div>
              <div className="eyebrow">
                PROFILE DETAILS
              </div>

              <h2>
                Let’s get to know you.
              </h2>
            </div>

            <span className="required-note">
              * Required
            </span>
          </div>

          <div className="form-grid">

            {/* FULL NAME */}
            <label className="form-field full-span">
              Full name *

              <input
                value={form.fullName}
                onChange={(e) =>
                  updateField('fullName', e.target.value)
                }
                onBlur={() => blurField('fullName')}
                placeholder="e.g. Naledi Mokoena"
              />

              {fieldError('fullName') && (
                <small className="error-message">
                  {fieldError('fullName')}
                </small>
              )}
            </label>

            {/* STUDENT NUMBER */}
            <label className="form-field">
              Student number *

              <input
                value={form.studentNumber}
                onChange={(e) =>
                  updateField(
                    'studentNumber',
                    e.target.value.replace(/\D/g, '')
                  )
                }
                onBlur={() => blurField('studentNumber')}
                inputMode="numeric"
                placeholder="e.g. 2210456"
              />

              {fieldError('studentNumber') && (
                <small className="error-message">
                  {fieldError('studentNumber')}
                </small>
              )}
            </label>

            {/* CAMPUS */}
            <label className="form-field">
              Campus *

              <select
                value={form.campus}
                onChange={(e) =>
                  updateField('campus', e.target.value)
                }
                onBlur={() => blurField('campus')}
              >
                <option value="">
                  Select your campus
                </option>

                {campuses.map((campus) => (
                  <option
                    key={campus}
                    value={campus}
                  >
                    {campus}
                  </option>
                ))}
              </select>

              {fieldError('campus') && (
                <small className="error-message">
                  {fieldError('campus')}
                </small>
              )}
            </label>

            {/* EMAIL */}
            <label className="form-field full-span">
              Email address *

              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  updateField('email', e.target.value)
                }
                onBlur={() => blurField('email')}
                placeholder="you@example.com"
              />

              {fieldError('email') && (
                <small className="error-message">
                  {fieldError('email')}
                </small>
              )}
            </label>

            {/* PASSWORD */}
            <label className="form-field">
              Password *

              <input
                type="password"
                value={form.password}
                onChange={(e) =>
                  updateField('password', e.target.value)
                }
                onBlur={() => blurField('password')}
                placeholder="Minimum 8 characters"
              />

              {fieldError('password') && (
                <small className="error-message">
                  {fieldError('password')}
                </small>
              )}
            </label>

            {/* CONFIRM PASSWORD */}
            <label className="form-field">
              Confirm password *

              <input
                type="password"
                value={form.confirmPassword}
                onChange={(e) =>
                  updateField(
                    'confirmPassword',
                    e.target.value
                  )
                }
                onBlur={() => blurField('confirmPassword')}
                placeholder="Repeat password"
              />

              {fieldError('confirmPassword') && (
                <small className="error-message">
                  {fieldError('confirmPassword')}
                </small>
              )}
            </label>

          </div>

          {/* INTERESTS */}
          <fieldset className="interest-fieldset">
            <legend>
              Interests *
            </legend>

            <div className="checkbox-grid">
              {interestOptions.map((interest) => (
                <label
                  className="check-label"
                  key={interest}
                >
                  <input
                    type="checkbox"
                    checked={form.interests.includes(interest)}
                    onChange={() =>
                      toggleInterest(interest)
                    }
                  />

                  <span>
                    {interest}
                  </span>
                </label>
              ))}
            </div>

            {fieldError('interests') && (
              <small className="error-message">
                {fieldError('interests')}
              </small>
            )}
          </fieldset>

          {/* BIO */}
          <label className="form-field">
            Short bio *

            <textarea
              value={form.bio}
              onChange={(e) =>
                updateField('bio', e.target.value)
              }
              onBlur={() => blurField('bio')}
              rows="4"
              placeholder="Share something about your academic interests and goals..."
            />

            <span className="character-count">
              {form.bio.length} / 20 minimum characters
            </span>

            {fieldError('bio') && (
              <small className="error-message">
                {fieldError('bio')}
              </small>
            )}
          </label>

          {/* TERMS AND CONDITIONS */}
          <label className="terms-label">
            <input
              type="checkbox"
              checked={form.terms}
              onChange={(e) =>
                updateField('terms', e.target.checked)
              }
              onBlur={() => blurField('terms')}
            />

            <span>
              I agree to the Richfield Connect community
              guidelines and terms of use. *
            </span>
          </label>

          {fieldError('terms') && (
            <small className="error-message terms-error">
              {fieldError('terms')}
            </small>
          )}

          {/* SUBMIT */}
          <button
            className="button button-primary submit-button"
            type="submit"
          >
            Create my profile
            <span>→</span>
          </button>

        </form>

        {/* LIVE PROFILE PREVIEW */}
        <ProfilePreview form={form} />

      </div>
    </div>
  );
}