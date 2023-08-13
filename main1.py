import sys

input_from_js = sys.stdin.readline().strip()


from gpt4all import GPT4All
model = GPT4All('orca-mini-3b.ggmlv3.q4_0.bin')
system_template = '''
            [BEGIN]
                <write your instructions to yourself on how to teach the student to build the project efficiently and topic outline is based on INSTRUCTIONS>

                say Topic: <topic>
                say Let's start with an example: <generate a random example problem>
                say Here's how we can solve it: <answer the example problem step by step>
                say Here are the key concepts <key concepts of the topic>
                <sep>
                say You are doing great. Keep moving forward.
            [END]'''
# prompt_template = 'USER: {0}\nASSISTANT: '
with model.chat_session(system_template):
    response1 = model.generate({input_from_js},max_tokens=20)
    print(response1)


