import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function StepController({
  totalSteps = 1,
  currentStep = 0,
  onStepChange,
  stepTitle = ''
}) {
  const canPrev = currentStep > 0;
  const canNext = currentStep < totalSteps - 1;

  return (
    <div className="stepper">
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div className="stepper-dots">
          {Array.from({ length: totalSteps }).map((_, idx) => {
            const isCurrent = idx === currentStep;
            const isDone = idx < currentStep;
            return (
              <button
                key={idx}
                type="button"
                className={`stepper-dot ${isCurrent ? 'is-current' : ''} ${isDone ? 'is-done' : ''}`}
                onClick={() => onStepChange && onStepChange(idx)}
                aria-label={`Ir al paso ${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {stepTitle && (
          <span style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)' }}>
            {stepTitle}
          </span>
        )}
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          type="button"
          className="btn"
          disabled={!canPrev}
          onClick={() => onStepChange && onStepChange(currentStep - 1)}
          aria-label="Paso anterior"
        >
          <ChevronLeft size={16} />
          <span>Anterior</span>
        </button>
        <button
          type="button"
          className="btn btn-primary"
          disabled={!canNext}
          onClick={() => onStepChange && onStepChange(currentStep + 1)}
          aria-label="Paso siguiente"
        >
          <span>Siguiente</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
