// Create two interfaces MajorCredits and MinorCredits in task_5/js/main.ts:

// Each interface defines a number named credits
// Add a brand property to each interface in order to uniquely identify each of them
// Create two functions named sumMajorCredits and sumMinorCredits in task_5/js/main.ts:

// Each function takes two arguments subject1 and subject2
// sumMajorCredits returns MajorCredits value and sumMinorCredits returns MinorCredits value
// Each function sums the credits of the two subjects


interface MajorCredits {
  readonly brand: string;
  credits: number;
}

interface MinorCredits {
  readonly brand: string;
  credits: number;
}

export const sumMajorCredits = (
  subject1: MajorCredits,
  subject2: MajorCredits,
): MajorCredits => {
  return {
    brand: "MajorCredits",
    credits: subject1.credits + subject2.credits,
  };
};

export const sumMinorCredits = (
  subject1: MinorCredits,
  subject2: MinorCredits,
): MinorCredits => {
  return {
    brand: "MinorCredits",
    credits: subject1.credits + subject2.credits,
  };
};