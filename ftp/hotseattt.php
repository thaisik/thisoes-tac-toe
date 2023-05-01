<?php $p=1;include_once '_h.php'; ?>

<h1>TSK 井字棋热座<span style="font-size:18pt;font-weight:normal;color:#bc3342">（尚未码完，大量bug修改中）</span></h1>
<div class="board">
  <main>
    <div>
      <i><span id="s1"></span></i>
      <i><span id="s2"></span></i>
      <i><span id="s3"></span></i>
    </div><div>
      <i><span id="s4"></span></i>
      <i><span id="s5"></span></i>
      <i><span id="s6"></span></i>
    </div><div>
      <i><span id="s7"></span></i>
      <i><span id="s8"></span></i>
      <i><span id="s9"></span></i>
    </div>
  </main>
  <div id="buts">
    <button id="clc">清空棋盘</button>
    <section>
      <button id="fo"><span>o</span>&nbsp;先手</button>
      <button id="fx"><span>x</span>&nbsp;先手</button>
    </section><div id="cov"></div>
    <button id="res">重置计分</button>
  </div>
  <hr><h2>计分板</h2>
  <aside>
    <div><h3>o</h3><hr><p>0</p></div>
    <div><h3>x</h3><hr><p>0</p></div>
  </aside>
</div>
<?php include_once '_f.php'; ?>
