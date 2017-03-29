The following task is a great opportunity to show us your experience, your style, the way you work and to get us impressed with your skills, knowledge and tools.

The degree of finishing this task highly depends on how far you can get. Don't be afraid to stop and show where you are blocked - we will try to help.

Apart from the above, you can also present your skills in the following:

* source code management - we use Git (Github, Bitbucket etc) - in case of using one, please provide an applicable URL where the solved task can be seen,
* preprocessors (LASS, SASS, CoffeeScript, ES6),
* state management (Redux/Flux, Mobx)
* or other tools you find useful, like FlowType, Webpack etc.

When in doubt, please refer to the Airbnb [guidelines](https://github.com/airbnb/javascript) that our team uses on daily basis.

## The task

Develop an application displaying dynamic tabular datasets using React.js

The table itself should be of the following structure:

| ID  | User name | Post title | Views | Likes | Created at |
| --: | --------- | ---------- | ----: | ----: | :--------: |
| 10  | Johnny5   | My new car | 1120  | 52    | 2014-09-20 |

In real life use cases, the above data is most likely to be fetched through the REST endpoint. For the sake of this task please mock all actions that interact with the RESTful resources to fetch the above data.

For the purposes of styling, feel free to use any CSS kit available, like Bootstrap. It's not a part of the task and will not be judged.

The table should show maximum 5 rows at once. 

Apart from that, the following features should be developed:
- pagination,
- ability to control number of rows rendered (5/10/15/20),
- filtering based on user name,
- asc/desc sorting by every column,
- inserting a new record (it should be prepended to the list)

Additionaly, any persistence mechanism using e.g. localStorage would be a big plus.

The row of the currently authenticated user should be highlighed. Given that authorization is out of scope for this test task, the `activeUser` should be harcoded and its username should be compared with the applicable username of the user from a given row.
