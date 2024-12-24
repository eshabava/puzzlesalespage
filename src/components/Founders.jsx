// src/components/Founders.jsx
"use client";

export default function Founders() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Can't wait to have you onboard...
        </h2>
        
        <div className="flex justify-center">
          <div className="text-center bg-white p-6 rounded-lg border border-blue-100 w-72">
            <div className="w-32 h-32 mx-auto mb-4">
              <img
                src="/founder.jpg"
                alt="Your Name"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold">Manish Jain</h3>
            <p className="text-gray-600">Founder and CEO</p>
          </div>
        </div>

        <div className="mt-12 space-y-6 text-gray-700">
          <p className="font-semibold">
            P:S Look, we have done everything in our capacity to ensure you succeed with this business model. You get to create high quality word search puzzles for highly engaging puzzle and activity books in minutes with the software. <span className="italic">It just doesn't get any easier!</span>
          </p>
          
          <p>
            <span className="font-semibold">P:P:S</span> We have spent thousands of dollars and a lot of our software development team's time in researching, coding and reviewing WordSearch Puzzles Generator on top of the money spent with our foundry partner on the exclusive font development...all because <span className="font-semibold">we want you to grow your business</span> while having a stellar experience with this app.
          </p>
          
          <p>
  <span className="font-semibold">P:P:P:S</span> Remember we are here to hold your hand and take you through the process so you don't get stuck. You're getting this for just a one-time payment of $9, including all future upgrades and upcoming tools like Math Worksheet Generator, Word Search Puzzles Generator, and more at no extra cost. After the launch closes on the 31st of Dec, midnight EST the price of this offer would increase to $90.
</p>
        </div>
      </div>
    </section>
  );
}
