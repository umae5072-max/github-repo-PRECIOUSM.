# Workflow Documentation

## Round One
- Implemented a basic Settings Form component in `src/SettingsForm.tsx`.
- Used a simple AI prompt with minimal guidance.
- No unit tests were included.
- Focused on building a working prototype quickly.

### Round Two
- Used a structured AI prompt with clear requirements and validation.
- Improved the code organization and readability.
- Added unit tests in `tests/SettingsForm.test.tsx`.
- Improved maintainability, reliability, and debugging support.

## Key Differences
- Round One emphasized speed and rapid prototyping.
- Round Two followed a structured development workflow with testing.
- Round Two produces cleaner, more maintainable, and more reliable code suitable for collaborative development.
- Round One shows a fast but unstructured approach.
- Round Two demonstrates a professional workflow with testing.
- Round Two is preferred for real projects because it supports debugging and collaboration.


Round One

For Round One, I intentionally used a very simple and vague AI prompt to create a small capstone-related feature, which was a Settings Form with username and email fields. The AI generated a working React component with basic state management using useState, a simple submit handler, and an alert that displayed the entered information. The component also cleared the input fields after submission. While the generated code worked, it did not include any unit tests, detailed validation beyond the required fields, or explanations of the implementation. Because the prompt lacked context and constraints, I needed to manually review the code to ensure it matched the assignment requirements.

Round Two

For Round Two, I used a much more structured prompt. I clearly described the desired behavior, referenced the project files, specified the technologies to use, and instructed the AI to include testing and verification. The result was a cleaner workflow that included a SettingsForm.test.tsx file with a basic unit test using Vitest. The AI also produced code that was easier to understand and organize. Following a structured prompting approach reduced the amount of manual review needed and made the implementation more maintainable.

Comparison

Comparing both rounds showed a clear difference in development quality. Round One focused on generating a working prototype as quickly as possible, while Round Two emphasized correctness, maintainability, and verification. Round Two also introduced automated testing, making it easier to verify that the component behaved as expected. From an accessibility perspective, both versions used proper <label> elements associated with their input fields, improving usability for screen readers. I also considered edge cases such as empty input fields. The required attribute prevented empty submissions, although additional validation, such as checking email format or username length, could further improve the feature.

AI Mistake I Caught

One issue I encountered during the assignment was a merge conflict after merging changes from the main branch into round-two. The AI-generated files created duplicate SettingsForm.tsx files in different directories, which caused confusion. I manually reviewed the project structure, removed the duplicate file, kept the correct version inside src, and verified the project before completing the merge. This demonstrated that AI-generated code still requires careful human review.

Conclusion

This assignment showed that structured prompting produces higher-quality results than vague prompting. Although Round Two required more planning, it reduced debugging time, improved code quality, and included automated testing. I learned that AI is most effective when given clear requirements, verification steps, and project-specific constraints rather than relying on a single, generic prompt.