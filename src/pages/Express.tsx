
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Express = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const moods = [
    "😊", "🥰", "😢", "😡", "😴", "🤔", 
    "😌", "😭", "🫣", "😍", "😶‍🌫️", "🤧", 
    "😜", "😫"
  ];

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMood) {
      toast({
        title: "Pick a mood first! 🥺",
        description: "Let me know how you're feeling, baby",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitted(true);
    toast({
      title: "Mood Delivered! 💌",
      description: "Rishav will respond with love soon!"
    });
  };

  const resetForm = () => {
    setSelectedMood("");
    setMessage("");
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Floating Hearts Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-300 animate-bounce opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              💕
            </div>
          ))}
        </div>

        <Card className="w-full max-w-md mx-auto shadow-2xl border-pink-200 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="text-6xl mb-4">💌</div>
            <CardTitle className="text-2xl font-bold text-pink-600 mb-2">
              Mood delivered to Rishav! 💖
            </CardTitle>
            <p className="text-pink-500 text-lg leading-relaxed">
              He'll respond with love soon 💌
            </p>
            <p className="text-pink-400 text-sm mt-2 italic">
              Not a complaint, just a vibe.
            </p>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="text-4xl animate-pulse">🥰</div>
            <Button 
              onClick={resetForm} 
              className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-6 py-2 rounded-full transform transition-all hover:scale-105 shadow-lg"
            >
              Send Another Mood 💭
            </Button>
            <Button 
              onClick={() => navigate('/')} 
              variant="outline"
              className="w-full border-pink-200 text-pink-600 hover:bg-pink-50"
            >
              Back to Grievance Portal 💔
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 animate-bounce opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-4 left-4 z-20">
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          className="bg-white/80 backdrop-blur-sm border-pink-200 text-pink-600 hover:bg-pink-50"
        >
          ← Back to Grievance Portal
        </Button>
      </div>

      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-lg mx-auto shadow-2xl border-pink-200 bg-white/95 backdrop-blur-sm animate-fade-in">
          <CardHeader className="text-center pb-6">
            <div className="text-5xl mb-3 animate-pulse">💖</div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Tell Rishav how you're feeling right now 💖
            </CardTitle>
            <p className="text-pink-400 text-sm italic">
              Not a complaint, just a vibe.
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mood Grid */}
              <div className="space-y-3">
                <label className="text-pink-700 font-medium text-center block">
                  Pick your mood 💭
                </label>
                <div className="grid grid-cols-7 gap-3 justify-items-center">
                  {moods.map((mood, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleMoodSelect(mood)}
                      className={`text-3xl p-2 rounded-full transition-all duration-200 transform hover:scale-110 ${
                        selectedMood === mood 
                          ? 'bg-pink-200 ring-2 ring-pink-400 scale-110' 
                          : 'hover:bg-pink-100'
                      }`}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
                {selectedMood && (
                  <div className="text-center">
                    <span className="text-pink-600 font-medium">
                      Selected: <span className="text-2xl">{selectedMood}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Message Box - shows after mood selection */}
              {selectedMood && (
                <div className="space-y-2 animate-fade-in">
                  <label className="text-pink-700 font-medium">
                    Wanna say something to Rishav with this mood?
                  </label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={`Feeling ${selectedMood} and wanted to tell you...`}
                    className="border-pink-200 focus:border-pink-400 bg-pink-50/50 min-h-[100px] resize-none"
                  />
                </div>
              )}

              {/* Submit Button */}
              {selectedMood && (
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white py-3 rounded-full transform transition-all hover:scale-105 shadow-lg text-lg font-medium animate-fade-in"
                >
                  Send your mood to Rishav 💬
                </Button>
              )}
            </form>

            <div className="mt-6 text-center">
              <p className="text-pink-400 text-xs">Made with 💖 by your Rishav</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Express;
