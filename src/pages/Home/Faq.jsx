

const Faq = () => {
    return (
        <div className="space-y-5">

            <div className="py-4 text-center">
                <h2 className="font-medium text-6xl text-gray-600">Frequently Asked</h2>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                How do I create and share assignments on the platform?
                </div>
                <div className="collapse-content">
                    <p> It&apos;s simple! Login in first, Navigate to the &apos;Create Assignment&apos; section, fill in details, and share.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Are there any restrictions on the types of assignments allowed?
                </div>
                <div className="collapse-content">
                    <p> While respecting diversity, we encourage educational content and prohibit inappropriate or harmful material.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Can I trust the authenticity of assignments shared by others?
                </div>
                <div className="collapse-content">
                    <p>Absolutely. Our user-validated content ensures authenticity, creating a reliable study experience.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How can I ensure the safety of my data on the platform?
                </div>
                <div className="collapse-content">
                    <p> We prioritize your privacy. Your data is encrypted and protected with advanced security measures.</p>
                </div>
            </div>

        </div>
    );
};

export default Faq;