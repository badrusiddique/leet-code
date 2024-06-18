class Robot:
    def __init__(self, x=0, y=0):
        self.position(x, y)

    def position(self, x, y):
        self.x = min(9, max(0, x))
        self.y = min(9, max(0, y))

    def move(self, moves):
        for move in moves:
            if move == 'U':
                self.position(self.x, self.y + 1)
            elif move == 'D':
                self.position(self.x, self.y - 1)
            elif move == 'L':
                self.position(self.x - 1, self.y)
            elif move == 'R':
                self.position(self.x + 1, self.y)
            else:
                raise ValueError(f"Invalid direction '{move}'")

if __name__ == '__main__':
    moves = "UDDLLRUUUDUURUDDUULLDRRRR"
    robot = Robot(0, 0)
    robot.move(moves)
    print(f"Final position: {robot.x}, {robot.y}")
