# Tasker

A Self-hosted task monitoring service based upon the [Dead man's switch](https://en.wikipedia.org/wiki/Dead_man%27s_switch). It can be deployed even on shared hosting and is built to work completely in-memory and no software dependencies.

## Installation

Currently, It can be installed directly via GitHub. 

```
npm install --global nithinkashyapn/tasker
```

## Quickstart

Start Tasker

```
tasker start
```

Create a task identification key

```
tasker create <<task_name>>
```

Stop Tasker

```
tasker stop
```

## Configuration

Environmental variables can be set 

PORT - The internal port that can be proxied if needed

```
TASKER_PORT
```

SLACK NOTIFICATION URL - Place where messages should be routed to

```
TASKER_SLACK_WEBHOOK
```

## Performance

Concurrent connections: 100

Latency:

┌─────────┬───────┬───────┬───────┬───────┬──────────┬──────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev    │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼──────────┼────────┤
│ Latency │ 24 ms │ 41 ms │ 69 ms │ 74 ms │ 42.43 ms │ 11.68 ms │ 138 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴──────────┴────────┘

Requests Per Second:

┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 1580    │ 1580    │ 2389    │ 2921    │ 2327.55 │ 425    │ 1580    │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 1.56 MB │ 1.56 MB │ 2.37 MB │ 2.89 MB │ 2.3 MB  │ 421 kB │ 1.56 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴────────┴─────────┘

## TODOs

- [ ] Add unit test cases
- [x] Make it completely in-memory
- [x] Improve Performace
- [ ] Build UI
- [ ] Better CLI
- [ ] Support multiple timeframes
- [ ] Zapier Integration
- [ ] Slack Application
- [ ] Log Support

## License

AGPL v3