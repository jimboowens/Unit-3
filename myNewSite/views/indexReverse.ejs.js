<h1>Hello, class</h1>
<!-- if you do an = with the %, that means print, and without it means evaluate -->
<p><%= title %></p> 
<ul>
    <% for (let i= students.length -1;i<=0; i--){ %>
        <li> <%= students[i] %></li>
    <%} %>
</ul>