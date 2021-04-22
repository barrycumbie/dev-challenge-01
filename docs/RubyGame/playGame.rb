# Benjamin Davis
class Game

    def initialize
        @letters = ('a'..'z').to_a
        @word = words.sample
        @lives = 7
        @correct_guesses = []
        @word_teaser = ""
        @word.first.size.times do
            @word_teaser += "_ "
        end
    end

    def words
        [
            ["cricket", "A game played by gentlemen"],
            ["jogging", "We are not walking..."],
            ["celebrate", "Remembering special moments"],
            ["continent", "there are 7 of these"],
            ["exotic", "Not from around here..."],
        ]
    end

    def print_teaser last_guess = nil
        
        update_teaser(last_guess) unless last_guess.nil?
        puts @word_teaser
        
    end

    def update_teaser last_guess
        new_teaser = @word_teaser.split

        new_teaser.each_with_index do |letter, index|
            # replace blank values with letter that matches letter in word
            if letter == "_" && @word.first[index] == last_guess
                new_teaser[index] = last_guess
            end
        end

        @word_teaser = new_teaser.join(' ')
    end

    def make_guess
        if @lives > 0
            puts "\nEnter a letter"
            guess = gets.chomp.to_s.downcase

            # if letter is not part of word then remove from letters array
            good_guess = @word.first.include? guess
            
            if guess == "exit"
                puts "\nThank you for playing."

            elsif good_guess
                puts "\nGood guess.\n"

                @correct_guesses << guess

                # remove correct guess from alphabet
                @letters.delete guess

                print_teaser guess

                if @word.first == @word_teaser.split.join
                    puts "\nCongrats you have won this game.\n\n"
                else
                    make_guess
                end
            else
                @lives -= 1
                puts "Try again... you have #{@lives} lives left. Try Again."
                make_guess
            end
        else
            puts "Out of lives! Game Over!"
        end
    end

    def start
        # ask user to guess a letter.
        puts "\nWelcome to the word guessing game!\n\n"
        puts "Starting game! Your word is #{@word.first.size} characters long."
        puts "If you want to exit the game type 'exit'"
        print_teaser
        puts "Hint: Your clue is #{ @word.last}"

        make_guess


        
    end
    
end

game = Game.new
game.start
