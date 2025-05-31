
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { heart } from "lucide-react";

const Index = () => {
  const [mood, setMood] = useState("");
  const [complaint, setComplaint] = useState("");
  const [solution, setSolution] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const moods = [
    { value: "angry", label: "😡 Angry", emoji: "😡" },
    { value: "sad", label: "😔 Sad", emoji: "😔" },
    { value: "crying", label: "😢 Crying", emoji: "😢" },
    { value: "huffing", label: "😤 Huffing", emoji: "😤" },
    { value: "pleading", label: "🥺 Pleading", emoji: "🥺" },
    { value: "confused", label: "😶‍🌫️ Confused", emoji: "😶‍🌫️" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood || !complaint) {
      toast({
        title: "Oops! 🥺",
        description: "Please fill in your mood and tell me what I did wrong, my queen!",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Complaint Received! 💝",
      description: "Your complaint has been sent to your guilty boyfriend's heart.",
    });
  };

  const resetForm = () => {
    setMood("");
    setComplaint("");
    setSolution("");
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Floating Hearts Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-300 animate-bounce opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              💕
            </div>
          ))}
        </div>

        <Card className="w-full max-w-md mx-auto shadow-2xl border-pink-200 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="text-6xl mb-4">👑</div>
            <CardTitle className="text-2xl font-bold text-pink-600 mb-2">
              Complaint Received, Your Highness! 💝
            </CardTitle>
            <p className="text-pink-500 text-lg leading-relaxed">
              I'm already thinking of 100 ways to make it up to you 💐
            </p>
            <p className="text-pink-400 text-sm mt-2">
              Your guilty boyfriend is now in full panic mode trying to fix this! 😅
            </p>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-4">
              <div className="text-4xl animate-pulse">💖</div>
              <Button
                onClick={resetForm}
                className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-3 rounded-full transform transition-all hover:scale-105 shadow-lg"
              >
                Submit Another Complaint 😈
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 animate-bounce opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            💕
          </div>
        ))}
      </div>

      <Card className="w-full max-w-lg mx-auto shadow-2xl border-pink-200 bg-white/95 backdrop-blur-sm animate-fade-in">
        <CardHeader className="text-center pb-6">
          <div className="text-5xl mb-3 animate-pulse">👑</div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Grievance Portal
          </CardTitle>
          <p className="text-pink-600 text-lg font-medium">Only for My Queen</p>
          <div className="mt-4 p-4 bg-pink-50 rounded-lg border border-pink-200">
            <p className="text-pink-700 text-base leading-relaxed">
              Hey babygurl, I know sometimes I mess up... 😅
            </p>
            <p className="text-pink-600 text-sm mt-2">
              Tell me what's on your mind ❤️
            </p>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Mood Selector */}
            <div className="space-y-2">
              <label className="text-pink-700 font-medium flex items-center gap-2">
                <span>Your Mood Right Now</span>
                <span className="text-xl">💭</span>
              </label>
              <Select value={mood} onValueChange={setMood}>
                <SelectTrigger className="border-pink-200 focus:border-pink-400 bg-pink-50/50">
                  <SelectValue placeholder="How are you feeling, my queen? 🥺" />
                </SelectTrigger>
                <SelectContent className="bg-white border-pink-200">
                  {moods.map((moodOption) => (
                    <SelectItem
                      key={moodOption.value}
                      value={moodOption.value}
                      className="hover:bg-pink-50"
                    >
                      {moodOption.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Complaint Text */}
            <div className="space-y-2">
              <label className="text-pink-700 font-medium flex items-center gap-2">
                <span>What did this idiot (me 😅) do again?</span>
              </label>
              <Textarea
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
                placeholder="Tell me exactly what I did wrong, and don't hold back... 💔"
                className="border-pink-200 focus:border-pink-400 bg-pink-50/50 min-h-[100px] resize-none"
                required
              />
            </div>

            {/* Solution Text */}
            <div className="space-y-2">
              <label className="text-pink-700 font-medium flex items-center gap-2">
                <span>How can I make it better, meri jaan?</span>
                <span className="text-xl">🥺</span>
              </label>
              <Textarea
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                placeholder="Give me a chance to fix this... What would make my queen happy again? 🌹"
                className="border-pink-200 focus:border-pink-400 bg-pink-50/50 min-h-[80px] resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white py-3 rounded-full transform transition-all hover:scale-105 shadow-lg text-lg font-medium"
            >
              Send this to your guilty boyfriend 😞
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-pink-400 text-xs">
              Made with 💖 by your loving (but sometimes stupid) boyfriend
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
